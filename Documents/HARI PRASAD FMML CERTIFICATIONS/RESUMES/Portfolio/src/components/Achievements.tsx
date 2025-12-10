"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GridPattern } from "./magicui/grid-pattern";
import { Award, Trophy, Target, Code } from "lucide-react";

type Achievement = {
  title: string;
  description: string;
  icon: React.ReactNode;
  year: string;
};

// My achievements
const achievements: Achievement[] = [
  {
    title: "Top 10% - IIIT-H FMML Program",
    description:
      "Secured Grade A among 1500+ learners in Foundations of Modern Machine Learning Program at IIIT Hyderabad (iHub-Data). Completed all three parts with excellent performance.",
    icon: <Award className="w-6 h-6" />,
    year: "2023 - 2024",
  },
  {
    title: "2nd Place - Code Quest 2.0",
    description:
      "Won 2nd place in Python Coding Contest at JNTU-GV, solving 6 DSA-style problems. Demonstrated strong problem-solving and algorithmic thinking skills.",
    icon: <Trophy className="w-6 h-6" />,
    year: "2024",
  },
  {
    title: "Top 100 - Deloitte BRIDGE",
    description:
      "Achieved top 100 position in Deloitte BRIDGE Campus Learning Series - Maximizing Workforce Potential quiz. Showcased knowledge in workforce optimization and business analytics.",
    icon: <Target className="w-6 h-6" />,
    year: "2024",
  },
  {
    title: "National-Level Hackathons",
    description:
      "Multiple recognitions in national-level hackathons including VALIANT ML Hackathon at VIT, Unstop Talent Park - Tech, and Code Rush by Newton School. Built innovative solutions in AI/ML domain.",
    icon: <Code className="w-6 h-6" />,
    year: "2023 - 2024",
  },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({
  achievement,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative overflow-hidden rounded-xl border-2 border-transparent dark:border-none dark:bg-gradient-to-br dark:from-muted/40 dark:via-muted/20 dark:to-muted/40 bg-gradient-to-br from-background via-background/50 to-background shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full backdrop-blur-sm"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {achievement.icon}
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {achievement.title}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
          {achievement.description}
        </p>
        
        <p className="text-xs text-primary/70 font-medium">{achievement.year}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-[calc(100vh-7rem)] relative flex items-center py-12 justify-center w-full"
    >
      <GridPattern
        strokeDasharray="1 2"
        className="fill-primary/30 -z-10 stroke-primary/80 [mask-image:radial-gradient(90vw_circle_at_center,var(--muted),transparent)]"
      />
      
      <div className="max-w-6xl w-full space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl max-sm:text-2xl font-black">Achievements</h1>
          <p className="text-base max-sm:text-sm text-foreground/70 max-w-2xl mx-auto">
            Some milestones and recognitions I&apos;ve earned along the way
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

