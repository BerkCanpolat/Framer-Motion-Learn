import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react";
 
 
// ─── AnimatedCard ─────────────────────────────────────────────────────────────
// Her kart bu component'ten oluşuyor.
// Kendi cardRef'ini izliyor → dışarıdan hiçbir hesaplama gelmiyor.
 
const AnimatedCard = ({ heading, imgBackground }) => {


  const colors = {
    red:   "bg-red-400",
    green: "bg-green-400",
    blue:  "bg-blue-400",
  }
 
  // 1) Her kartın kendine ait bir ref'i var
  const cardRef = useRef(null);
 
  // 2) Bu ref'in scroll alanını izliyoruz
  //    offset: ["start end", "end end"]
  //    → "start end"  : kartın ÜSTÜ viewport'un ALTINA girdiğinde progress = 0
  //    → "end end"    : kartın ALTI viewport'un ALTINA girdiğinde progress = 1
  //    Yani kart ekrandan çıkmaya başladığında animasyon başlar.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });
 
  // 3) scrollYProgress 0→1 giderken scale ve opacity dönüşümü
  //    0 → kart tam görünür   (scale: 1,   opacity: 1)
  //    1 → kart arkaya çekilir (scale: 0.8, opacity: 0)
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
 
  return (
    // cardRef burada: scroll hesabı bu div'in alanına göre yapılıyor
    // h-dvh + sticky top-0 → kart bir ekran yüksekliği kadar yer kaplıyor
    //                         ve scroll edilirken üstte sabit kalıyor
    <div ref={cardRef} className='h-dvh sticky top-0 py-20'>
 
      {/* scale ve opacity buraya uygulanıyor */}
      <motion.div
        style={{ scale, opacity }}
        className='h-full'
      >
        <div className='flex bg-white max-w-[90%] h-full mx-auto px-10 gap-20 rounded-3xl shadow-xl'>
          <div className='flex-1 grid content-center gap-10'>
            <h2 className='text-4xl lg:text-8xl'>{heading}</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Qui a officia iure aut libero ipsam, maiores atque hic reiciendis,
              minima, veritatis iste laudantium animi at adipisci excepturi
              distinctio et explicabo.
            </p>
            <button className='p-2 px-4 border border-black rounded-full mr-auto'>
              Find out more
            </button>
          </div>
          <div className='flex-1 h-full py-10'>
            <div className={`${colors[imgBackground]} w-full h-full rounded-tr-[200px]`} />
          </div>
        </div>
      </motion.div>
 
    </div>
  );
};

export default AnimatedCard;