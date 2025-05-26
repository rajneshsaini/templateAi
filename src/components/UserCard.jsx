import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import avatar from "../assets/images/avatar.png";
import cancel from "../assets/icons/cancel.png"
import textOverlayImg from '../assets/images/nameUpperLayer.png'
import avatarOverlayImg from '../assets/images/avatarOverlay.png'

const textOverlay = `url(${textOverlayImg})`;
const avatarOverlay = `url(${avatarOverlayImg})`;

export const cards = [
  {
    id: 1,
    name: "Monye Matt",
    usage: "20k Use",
    image: avatar,
  },
  {
    id: 2,
    name: "Sarah Stone",
    usage: "15k Use",
    image: avatar,
  },
  {
    id: 3,
    name: "Alex Green",
    usage: "12k Use",
    image: avatar,
  },
  {
    id: 4,
    name: "Liam Nova",
    usage: "25k Use",
    image: avatar,
  },
];

export default function UserCard({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#03061C] backdrop-blur-md flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-[1024px] h-[700px] bg-transparent flex items-center justify-center popup-bg"
      >
        {/* Close button */}
       <button
          className="absolute top-20 right-6 !bg-transparent hover:text-gray-300 z-50"
          onClick={onClose}
        >
          <img src={cancel} alt="cross" width={25} height={25} />
        </button>

        {/* Swiper with navigation outside the card */}
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="w-full h-full"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="flex items-center justify-center h-full">
                <div className="user-card-wrapper w-[437px] h-[505px] rounded-[35px] relative shadow-xl text-center text-white font-semibold">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-[#1e1e2f]  rounded-[35px]">
                    <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[220px] h-[220px] bg-purple-500 opacity-40 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[0px] left-1/2 transform -translate-x-1/2 w-[300px] h-[150px] bg-yellow-300 opacity-30 rounded-full blur-2xl"></div>
                    <div className="absolute top-0 left-0 w-[120px] h-[120px] bg-gray-600 opacity-1 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-gray-700 opacity-30 rounded-full blur-2xl"></div>
                  </div>

                  {/* Usage Text */}
                  <div className="relative z-10 text-orange-300 text-3xl font-semibold mb-4">
                    <h2 className="text-[62px] font-semibold bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] bg-clip-text text-transparent">
                      {card.usage}
                    </h2>
                  </div>

                  {/* Avatar */}
                  <div className="relative z-10">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-[173px] h-[244px] mx-auto object-contain mb-4 drop-shadow-xl"
                    />
                    <span
                      className="absolute w-[248px] h-[260px] left-1/2 top-[0px] transform -translate-x-1/2 bg-cover bg-center -z-10 blur-2xl"
                      style={{ backgroundImage: avatarOverlay }}
                    ></span>
                    <span
                      className="absolute w-[312px] h-[111px] left-1/2 bottom-[-20px] transform -translate-x-1/2 bg-cover bg-center blur-xl"
                      style={{ backgroundImage: textOverlay }}
                    ></span>
                  </div>

                  {/* Name */}
                  <div className="relative z-10">
                    <h4 className="text-white text-[42px] font-bold">{card.name}</h4>

                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrow styling override if needed */}
        {/* <style jsx>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            top: 50%;
            transform: translateY(-50%);
            width: 40px;
            height: 40px;
          }

          .swiper-button-prev {
            left: -40px;
          }

          .swiper-button-next {
            right: -40px;
          }
        `}</style> */}
      </motion.div>
    </div>
  );
}
