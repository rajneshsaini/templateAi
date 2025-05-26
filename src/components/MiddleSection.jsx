import React from 'react'
import centerCircleImage from '../assets/images/center-circle.png';
import brandAileftCornerIcon from '../assets/icons/brandAileftCornerIcon.png';
import AiJourneyLeftCornerIcon from '../assets/icons/AiJourneyLeftCornerIcon.png'
import brandingPath from '../assets/icons/brandingPath.png';
import AIJourney from '../assets/icons/AiJourney.png';
import iconBgUnion from '../assets/icons/iconsBgUnion.png'
const purpleBgGradient = "url('src/assets/images/purple-gradient-bg.png')";
const leftBottomBg = "url('src/assets/images/leftBottomBg.png')";
const rightBottomBg = "url('src/assets/images/rightBottomBg.png')";
import { motion } from 'framer-motion'
const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 12 },
    },
    hover: {
        scale: 1.03,
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.25)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
    },
};

const MiddleSection = ({ setIsJounryOpen, setIsAIPromptOpen }) => {
    return (
        <div>
            <div className="max-w-[556px] mx-auto">
                {/* Top gradient section */}
                <div className="relative h-[396px] rounded-3xl mb-4 overflow-hidden bg-center" style={{ backgroundImage: purpleBgGradient }}>
                    <div className="relative z-10 h-full flex pt-8 justify-center">
                        <h1 className="text-[62px] font-semibold text-[#FAF9FF]">Template Ai</h1>
                    </div>
                </div>

                {/* Center section with circle */}
                <div className="relative flex justify-center -mt-31 mb-4">
                    <div className="relative w-[270px] h-[270px]">
                        <div className="absolute inset-0 rounded-full bg-[#03061C]">
                            <div className="w-full h-full rounded-full bg-[#0A0A1B] flex items-center justify-center">
                                <motion.img src={centerCircleImage} className='animate-spin-slow' animate={{ rotate: 360 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 60, // rotate over 60 seconds
                                        ease: "linear",
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom sections */}
                <div className="flex gap-7 -mt-[29%]">
                    {/* Left section */}
                    <motion.div
                        className="flex-1 rounded-3xl p-6 h-[412px] flex flex-col justify-end-safe w-[264px] bg-bottom-right relative overflow-hidden cursor-pointer bg-cover bg-no-repeat"
                        style={{ backgroundImage: leftBottomBg }}
                        onClick={() => setIsAIPromptOpen(true)}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{ once: true }}
                    >
                        <img src={brandAileftCornerIcon} className="absolute left-1 top-1" />

                        <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-4 relative">
                            <img src={brandingPath} />
                            <img
                                src={iconBgUnion}
                                className="absolute h-16 w-32 object-contain min-w-32 left-[-52px] top-[-7px]"
                            />
                        </div>

                        <h3 className="text-lg font-bold mb-1 text-left text-[#E6E3FF]">
                            Branching paths
                        </h3>
                        <p className="text-[#ACA0E4] text-base text-left tracking-[0px]">
                            Explore multiple prompt directions with branching.
                        </p>
                    </motion.div>

                    {/* Right section */}
                    <motion.div
                        className="flex-1 rounded-3xl p-6 h-[412px] flex flex-col justify-end-safe w-[264px] cursor-pointer relative bg-cover bg-no-repeat overflow-hidden"
                        style={{ backgroundImage: rightBottomBg }}
                        onClick={() => setIsJounryOpen(true)}
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover="hover"
                        viewport={{ once: true }}
                    >
                        <img src={AiJourneyLeftCornerIcon} className="absolute right-1 top-1" />

                        <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4 relative">
                            <img src={AIJourney} />
                            <img
                                src={iconBgUnion}
                                className="absolute h-16 w-32 object-contain min-w-32 left-[-52px] top-[-7px]"
                            />
                        </div>

                        <h3 className="text-lg font-bold mb-1 text-left text-[#E6E3FF] group-hover:text-white transition">
                            Ai journey
                        </h3>
                        <p className="text-[#ACA0E4] text-base text-left tracking-[0px]">
                            Boost your prompt precision with keywords.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection