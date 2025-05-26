import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cancel from "../assets/icons/cancel.png"
import AIJourneyImg from '../assets/icons/AiJourney.png';
import Unionright from '../assets/icons/Unionright.png'

const AIJourneyData = [
    {
        year: "2023",
        title: "Your AI Prompt Companion",
        description: "Explore multiple prompt directions with branching.",
        icon: "\u{1F4AC}",
    },
    {
        year: "2021 - Present",
        title: "GrowthXD",
        description: "Explore multiple prompt directions with branching.",
        icon: "\u{1F680}",
    },
    {
        year: "2021 - Present",
        title: "GrowthXD",
        description: "Explore multiple prompt directions with branching.",
        icon: "\u{1F680}",
    },
];

const AIJourneyCard = ({ year, title, description, isActive, side }) => {
    return (
        <motion.div
            className={`relative flex items-center w-full h-[205px] transition-opacity duration-700 ease-in-out ${side === "left" ? "justify-start" : "justify-end"
                }`}
        >
            <motion.div
                initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative w-[400px] h-[205px] p-6 rounded-3xl shadow-lg z-20 transition-all duration-500 text-left
          ${isActive
                        ? "bg-[radial-gradient(circle_at_center_bottom,_#BBA5F4,_#653AD8)]  border border-white/10 p-6 text-white shadow-lg scale-105 blur-0 opacity-100"
                        : "bg-[radial-gradient(circle_at_top_left,_#C376C4,_#03061C)] text-white/50 scale-100 blur-sm opacity-40 backdrop-blur-md"}`}
            >
                <h3 className="text-[26px] font-semibold mb-1">{title}</h3>
                <p className="text-base text-white mb-3">{description}</p>
                <div className="flex justify-between items-center">
                <span className="text-base text-white opacity-80">Start from {year}</span>
                <div className=" flex justify-end">
                <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4 relative">
                    <img src={AIJourneyImg} alt="img" className="relative right-[43px] z-20"/>
                    <img
                        src={Unionright}
                        className="absolute h-16 w-32 object-contain min-w-32 right-[-28px]"
                    />
                </div>
                </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const AIJourney = ({ onClose }) => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const containerTop = containerRef.current.getBoundingClientRect().top;
            const containerHeight = containerRef.current.clientHeight;
            const centerY = containerTop + containerHeight / 2;

            const cards = Array.from(
                containerRef.current.querySelectorAll(".timeline-item")
            );

            let closestIndex = -1;
            let minDistance = Infinity;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(centerY - cardCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== -1) {
                setActiveIndex(closestIndex);
            }
        };

        const container = containerRef.current;
        container?.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            container?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div
                className="relative bg-[#0a0a23] rounded-2xl overflow-hidden"
                style={{ width: 1020, height: 765 }}
            >
                <button
                    className="absolute top-28 right-6 !bg-transparent hover:text-gray-300 z-50"
                    onClick={onClose}
                >
                    <img src={cancel} alt="cross" width={25} height={25} />
                </button>

                <div
                    ref={containerRef}
                    className="relative flex flex-col items-center gap-2 py-44 overflow-y-auto h-full px-10 text-white scrollbar-hide  popup-bg"
                >
                    <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-purple-600 to-transparent z-0" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full z-10" />

                    {AIJourneyData.map((item, index) => (
                        <div
                            key={`${item.title}-${index}`}
                            data-index={index}
                            className="timeline-item w-full flex "
                        >
                            <AIJourneyCard
                                {...item}
                                isActive={index === activeIndex}
                                side={index % 2 === 0 ? "left" : "right"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AIJourney;

