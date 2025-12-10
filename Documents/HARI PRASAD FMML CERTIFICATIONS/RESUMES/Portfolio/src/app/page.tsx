import HomeSection from '@/components/HomeSection'
import SkillsSection from '@/components/SkillsSection'
import AboutMe from '@/components/AboutMe'
import React from 'react'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'

// Main page component
const Home = () => {
  // LeetCode stats - empty for now
  const stats: SubmissionStat[] = [];
  const recentSubmissions: RecentSubmission[] = [];
  const totalAvailable = 0;
  const totalQuestions: Record<Difficulty, number> = {
    Easy: 0,
    Medium: 0,
    Hard: 0,
  };

  return (
    <div className='flex flex-col px-4 max-sm:px-2 w-full items-center snap-y snap-proximity justify-center'>
      <HomeSection />
      <AboutMe stats={stats} recentSubmissions={recentSubmissions} totalAvailable={totalAvailable} totalQuestions={totalQuestions} />
      <SkillsSection />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  )
}

export default Home