import React, { useState } from 'react'
import toggleBtn from '../assets/images/toggle-btn.png';
import camerabtn from '../assets/images/camerabtn.png';
import zapCircle from '../assets/images/zap-circle.png';
import giftButton from '../assets/images/giftButton.png';
import settingIcon from '../assets/images/settings.png';
import { motion } from 'framer-motion'
const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2, // delay between each child animation
        },
    },
};

const fallVariant = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 12,
        },
    },
};
const RightSection = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div>
            <div className='min-w-[262px] max-w-[262px] max-h-[157px] h-[157px] rounded-3xl bg-[#191934] relative overflow-hidden flex flex-col justify-center items-center p-8 mb-8' style={{
                background:
                    "radial-gradient(ellipse at right top, rgba(127,139,210,0.4), rgba(89,106,197,0) 80%)",
                backgroundColor: "#191934"
            }}>
                <div
                    onClick={() => setIsToggled(!isToggled)}
                    className="border border-[#110A2B40] bg-[#110A2B40] rounded-full py-2 w-[132px] h-[72px] shadow-[inset_0_4px_6px_rgba(1,5,30,0.5)] cursor-pointer relative overflow-hidden transition-all duration-300"
                >
                    <motion.img
                        src={toggleBtn}
                        height={56}
                        alt="toggle"
                        className="absolute top-2 left-2"
                        animate={{ x: isToggled ? 56 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                </div>
            </div>

            <div className='min-w-[262px] max-w-[262px] max-h-[221px] h-[221px] rounded-3xl bg-[#191934] relative overflow-hidden flex flex-col justify-between p-8 mb-8' style={{
                background:
                    "radial-gradient(ellipse at right top, rgba(127,139,210,0.4), rgba(89,106,197,0) 80%)",
                backgroundColor: "#191934"
            }}>
                <h2 className="text-[62px] font-extrabold bg-gradient-to-r from-[#F5F1FF] to-[#6633EE] text-transparent bg-clip-text">
                    25M</h2>
                <div className={`createdPrompt bg-gradient-to-r from-[#b294ff3c] to-[#502bac90] w-[188px] h-[40px] rounded-md flex items-center justify-center relative before:content-[''] before:absolute before:w-[10px] before:h-[40px] before:left-[-3px] after:content-[''] after:absolute after:w-[10px] after:h-[40px] after:right-[-3px] `}
                    style={{
                        '--tw-before-bg-size': 'contain',
                        '--tw-before-bg-repeat': 'no-repeat',
                        '--tw-before-bg-position': 'center',
                    }}
                >
                    <span className="text-[#B2A1FD] font-medium ">created prompts</span>
                </div>
            </div>

            <div className='min-w-[262px] max-w-[262px] max-h-[412px] min-h-[412px] rounded-3xl bg-[#191934] relative overflow-hidden flex flex-col  justify-between p-6 mb-8' style={{
                background:
                    "radial-gradient(ellipse at right top, rgba(127,139,210,0.4), rgba(89,106,197,0) 80%)",
                backgroundColor: "#191934"
            }}

            >
                <div>
                    <h3 className='text-lg font-bold text-[#E6E3FF] text-left mb-1'>Prompt Service</h3>
                    <p className='text-base leading-6 text-[#ACA0E4] text-left'>Use pre-made templates to jumpstart creativity.</p>
                </div>
                <motion.div
                    className="relative h-[194px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="absolute top-[42px] right-[44px]"
                        variants={fallVariant}
                    >
                        <img src={giftButton} />
                    </motion.div>

                    <motion.div
                        className="absolute rotate-[-54.55deg] top-[48px] left-0"
                        variants={fallVariant}
                    >
                        <button className="w-[119px] h-[48px] !rounded-full border !border-[#FFFFFF0D]  !bg-[#19193450] font-medium text-base text-[#D5CCFF] flex items-center gap-1">
                            <span className="bg-[#C883FB] w-[10px] h-[10px] rounded-full block mr-1"></span>
                            Rewrite
                        </button>
                    </motion.div>

                    <motion.div className="absolute bottom-0" variants={fallVariant}>
                        <img src={camerabtn} />
                    </motion.div>

                    <motion.div
                        className="absolute rotate-[38deg] right-[52px] bottom-[21px]"
                        variants={fallVariant}
                    >
                        <button className="w-[100px] h-[48px] !rounded-full border !border-[#FFFFFF0D]  !bg-[#19193450] font-medium text-base text-[#D5CCFF] flex items-center gap-1">
                            <img src={settingIcon} width={28} height={28} />
                            <img src={zapCircle} />
                        </button>
                    </motion.div>

                    <motion.div
                        className="rotate-90 relative right-[-86px] bottom-[-78px]"
                        variants={fallVariant}
                    >
                        <button className="min-w-[194px] h-[48px] !rounded-full border !border-[#FFFFFF0D]  !bg-[#19193450] font-medium text-base text-[#D5CCFF] flex items-center gap-[12px]">
                            <span className="flex gap-0.5 items-center">
                                <span className="bg-[#C883FB] w-[10px] h-[10px] rounded-full block mr-1"></span>
                                JPG
                            </span>
                            <span className="flex gap-0.5 items-center">
                                <span className="bg-[#FFB266] w-[10px] h-[10px] rounded-full block mr-1"></span>
                                PNG
                            </span>
                            <span className="flex gap-0.5 items-center">
                                <span className="bg-[#44B7FF] w-[10px] h-[10px] rounded-full block mr-1"></span>
                                PDF
                            </span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}

export default RightSection