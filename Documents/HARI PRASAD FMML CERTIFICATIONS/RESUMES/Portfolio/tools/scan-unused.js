const fs = require('fs');
const path = require('path');

const root = process.cwd();
const ignoreDirs = ['node_modules', '.next', '.git'];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (!ignoreDirs.includes(file)) results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  });
  return results;
}

function isTextFile(file) {
  const ext = path.extname(file).toLowerCase();
  const binaryExts = ['.png', '.jpg', '.jpeg', '.webp', '.ico', '.svg', '.pdf'];
  return !binaryExts.includes(ext);
}

function scan() {
  const targetDirs = [path.join(root, 'src'), path.join(root, 'public')];
  const allFiles = [];
  targetDirs.forEach((d) => {
    if (fs.existsSync(d)) allFiles.push(...walk(d));
  });

  // Read all file contents for searching (only text files)
  const repoFiles = walk(root).filter((f) => !f.includes(path.join(root, 'node_modules')) && !f.includes(path.join(root, '.next')) && isTextFile(f));
  const repoContents = {};
  repoFiles.forEach((f) => {
    try {
      repoContents[f] = fs.readFileSync(f, 'utf8');
    } catch (e) {
      repoContents[f] = '';
    }
  });

  const candidates = [];
  allFiles.forEach((f) => {
    const basename = path.basename(f);
    const nameNoExt = path.parse(f).name;
    let occurrences = 0;
    Object.keys(repoContents).forEach((rf) => {
      const content = repoContents[rf];
      if (!content) return;
      if (content.includes(basename) || content.includes(nameNoExt)) occurrences += 1;
    });
    // If occurrences is 0, it's not referenced anywhere (including itself if binary). If occurrences ==1 and the only file containing it is itself, consider unused.
    const appearsIn = Object.keys(repoContents).filter((rf) => {
      const content = repoContents[rf];
      return content && (content.includes(basename) || content.includes(nameNoExt));
    });

    const onlySelf = appearsIn.length === 1 && appearsIn[0] === f;
    if (occurrences === 0 || onlySelf) {
      candidates.push({ file: f, occurrences, appearsIn });
    }
  });

  const out = { timestamp: new Date().toISOString(), candidates };
  const outPath = path.join(root, 'tools', 'unused-scan-result.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log('Scan complete. Results written to', outPath);
}

scan();
