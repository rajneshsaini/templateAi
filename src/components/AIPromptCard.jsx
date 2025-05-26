import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import cancel from "../assets/icons/cancel.png"
import giftIcon from '../assets/icons/giftIcon.png';
import Unionright from '../assets/icons/Unionright.png';
const dashedBg = 'src/assets/icons/dashed-bg.png';


const cards = [
    {
        title: 'Your AI Prompt Prompts templates',
        description: 'Use pre-made templates to jumpstart creativity.',
    },
    {
        title: 'Your AI Prompt Prompts templatest',
        description: 'Tailor prompts to suit your unique needs.',
    },
    {
        title: 'Your AI Prompt Prompts templates',
        description: 'Explore a gallery of creative AI uses.',
    },
    {
        title: 'Your AI Prompt Prompts templates',
        description: 'Let AI guide your creativity with suggestions.',
    },
    {
        title: 'Your AI Prompt',
        description: 'Boost productivity by using AI-generated content.',
    },
];

const AIPromptCard = () => {
    const [isOpen, setIsOpen] = useState(true);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(1); // Set second item as initial focused
        }
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="relative w-full max-w-[1600px] px-4">
                <button
                    className="absolute -top-14 right-6 !bg-transparent hover:text-gray-300 z-50"
                    onClick={() => setIsOpen(false)}
                >
                    <img src={cancel} alt="cross" width={25} height={25} />
                </button>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={"auto"}
                    centeredSlides
                    loop
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    navigation
                    spaceBetween={40}
                    className="swiper-nav-enabled px-12"
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index} className="!w-[542px]">
                            {({ isActive }) => (
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0.5 }}
                                    animate={{
                                        scale: isActive ? 1 : 0.8,
                                        opacity: isActive ? 1 : 0.5,
                                        filter: isActive ? 'blur(0px)' : 'blur(4px)',
                                    }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    className="w-[542px] h-[386px] rounded-2xl p-11 text-white shadow-xl text-center bg-cover bg-center bg-no-repeat"
                                    style={{
                                        backgroundImage: `
      radial-gradient(circle at center bottom, #BBA5F4, #653AD8),
      url(${dashedBg})
    `,
                                        backgroundBlendMode: 'overlay', // Or try 'soft-light' or 'multiply'
                                    }}
                                >
                                    <div className="flex justify-start">
                                        <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4 relative">
                                            <img src={giftIcon} alt='image' className='relative left-[19px] z-20' />
                                            <img
                                                src={Unionright}
                                                className="absolute h-16 w-32 object-contain min-w-32 left-[-52px] top-[-7px] rotate-y-180"
                                            />
                                        </div>
                                    </div>
                                    <h2 className="mt-4 text-[46px] text-[#FAF9FF] leading-[60px] font-semibold text-left tracking-[-2%]">
                                        {card.title}
                                    </h2>

                                    <p className="text-base mt-2 text-[#ACA0E4] text-left">
                                        {card.description}
                                    </p>
                                </motion.div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: #976FFF !important;
        
          }

       
        `}</style>
            </div>
        </div>
    );
};

export default AIPromptCard;
