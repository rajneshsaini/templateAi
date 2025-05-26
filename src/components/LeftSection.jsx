import React from 'react'
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import topUserIcon from '../assets/images/topUserIcon.png';
import generateBtnIcon from '../assets/icons/generateBtnIcon.png'
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2, // 0.2s delay between each image
        },
    },
};

const imageVariant = {
    hidden: { y: -30, opacity: 0 },
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
const LeftSection = ({ setIsOpen }) => {
    return (
        <div>
            <div className='min-w-[262px] max-w-[262px] max-h-[396px] rounded-3xl bg-[#191934] relative overflow-hidden flex flex-col gap-40 justify-between p-8 mb-8' style={{
                background:
                    "radial-gradient(ellipse at right top, rgba(127,139,210,0.4), rgba(89,106,197,0) 80%)",
                backgroundColor: "#191934"
            }}>

                <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[#AA9CFC] text-transparent bg-clip-text text-left">Create your own template</h2>
                <div >
                    <h4 className='text-[#E6E3FF] text-lg font-bold text-left'>14 days trial</h4>
                    <p className='text-[#ACA0E4] text-left font-base'>after – $5/month</p>
                </div>
            </div>
            <div className='min-w-[262px] max-w-[262px] h-[220px] rounded-3xl bg-[#191934] relative overflow-hidden flex flex-col p-8 mb-8' style={{
                background:
                    "radial-gradient(ellipse at right top, rgba(127,139,210,0.4), rgba(89,106,197,0) 80%)",
                backgroundColor: "#191934"
            }}>

                <h2 className="text-[62px] leading-[56px] font-semibold bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] text-transparent bg-clip-text">20</h2>
                <p className='text-[#B2A1FD] text-lg'>Top Users</p>
                <motion.div
                    className="flex justify-center mt-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.img
                        src={user1}
                        className="w-[56px] h-[56px] border-[3px] border-[#16172D] rounded-full bg-[#E58C5D]"
                        variants={imageVariant}
                    />

                    <motion.img
                        src={topUserIcon}
                        className="w-[56px] h-[56px] -ml-4"
                        variants={imageVariant}
                    />

                    <motion.img
                        src={user2}
                        className="w-[56px] h-[56px] border-[3px] border-[#16172D] rounded-full bg-[#8A6CEA] -ml-4"
                        variants={imageVariant}
                    />
                </motion.div>

            </div>
            <div className='min-w-[262px] max-w-[262px] h-[164px] rounded-3xl bg-[#191934] relative overflow-hidden flex items-center justify-center p-8' style={{
                background:
                    "radial-gradient(ellipse at right top, rgba(127,139,210,0.4), rgba(89,106,197,0) 80%)",
                backgroundColor: "#191934"
            }}>

                <div
                    onClick={() => setIsOpen(true)}
                    className='group cursor-pointer border border-[#110A2B40] bg-[#110A2B40] rounded-full py-2 shadow-[inset_0_4px_6px_rgba(1,5,30,0.5)] w-[198px] flex justify-center
             transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_12px_#5F33D6AA]'
                >
                    <div className='!bg-[#5F33D6] text-white w-[182px] h-[56px] !rounded-full flex items-center justify-center gap-2'>
                        <img src={generateBtnIcon} alt="Generate" />
                        Generate
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftSection