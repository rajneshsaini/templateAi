import React, { useState } from 'react'
import UserCard from './UserCard'

import AIJourney from './AIJourneyCard';
import { motion, AnimatePresence } from 'framer-motion';
import AIPromptCard from './AIPromptCard';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSection from './RightSection';


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJounryOpen, setIsJounryOpen] = useState(false)
  const [isAIPromptOpen, setIsAIPromptOpen] = useState(false)

  return (
    <div className='min-w-[1200px] bg-[#03061C] mx-auto'>
      <div className='flex p-8'>
        <div className='min-w-[262px] max-w-[262px]'>
          <LeftSection setIsOpen={setIsOpen} />
        </div>
        <div className="max-w-[556px] bg-[#0A0A1B] text-white px-8">
          <MiddleSection setIsJounryOpen={setIsJounryOpen} setIsAIPromptOpen={setIsAIPromptOpen} />
        </div>
        <RightSection />
      </div>

      <UserCard isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {isJounryOpen && <AIJourney onClose={() => setIsJounryOpen(false)} />
      }

      {isAIPromptOpen && <AIPromptCard onClose={() => setIsAIPromptOpen(false)} />
      }

    </div>


  )
}

export default Dashboard