import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import img1 from "../../../../assets/img1.png"
import { imageData } from '../../../ScrollAnimationTwo/imageData';
import ScrollParallaxImgA2 from './ScrollParallaxImgA2';

const ScrollAnimationA2 = () => {
  const mainRef = useRef(null);
  const blackSectionRef = useRef(null);

  const { scrollYProgress } = useScroll(
    {
      target: mainRef,
      offset: ["start start", "end end"]
    }
  );

  const sections = 6;


  const logoY = useTransform(
    scrollYProgress,
    [0, 0.5 / sections, 2 / sections, 2.5 / sections],
    ["70dvh","0dvh","0dvh","-70dvh"]
  );

  const imageY = imageData.map(({y}) => useTransform(
    scrollYProgress,
    [0,1],
    y
  ));



    // ─── Klasör bölümü scroll ───────────────────────────────────────────────
  // "start start" → bölümün üstü viewport üstüne geldiğinde animasyon başlar.
  // Önceki "start end" yanlıştı: bölüm ekrana girmeden animasyon başlıyordu.
  const { scrollYProgress: blackSlider } = useScroll({
    target: blackSectionRef,
    offset: ["start start", "end end"]
  });
 
  // ── Klasör: aşağı kayar + solar ─────────────────────────────────────────
  const folderY       = useTransform(blackSlider, [0, 0.4], ["35vh",  "110vh"]);
  const folderOpacity = useTransform(blackSlider, [0, 0.1], [1,      0]);

  folderOpacity.on("change", v => console.log("opacity:", v))
 
  // ── Resimler ─────────────────────────────────────────────────────────────
  //
  //  Başlangıç (slider = 0):
  //    y: +100-120px → resimler merkez noktasından aşağıda; klasörün
  //    alt kenarının arkasına gizlenmiş ("klasörün içi" görünümü).
  //    x: ±6-18px    → üst üste yığılmış kart düzeni
  //    rotate: ±1-2° → hafif açılmış fan
  //
  //  Bitiş (slider = 0.4):
  //    y: 0          → ortalanmış
  //    x: ±68-220px  → geniş yayılmış
  //    rotate: ±2-8° → belirgin dönme
 
  // Resim 1 — en sol
  const x1 = useTransform(blackSlider, [0, 0.4], [-18,  -220]);
  const y1 = useTransform(blackSlider, [0, 0.4], [120,     0]);
  const r1 = useTransform(blackSlider, [0, 0.4], [-2,     -8]);
  const s1 = useTransform(blackSlider, [0, 0.4], [0.9,     1]);
 
  // Resim 2 — sol orta
  const x2 = useTransform(blackSlider, [0, 0.4], [-6,    -68]);
  const y2 = useTransform(blackSlider, [0, 0.4], [100,     0]);
  const r2 = useTransform(blackSlider, [0, 0.4], [-0.8,  -2.5]);
  const s2 = useTransform(blackSlider, [0, 0.4], [0.92,    1]);
 
  // Resim 3 — sağ orta
  const x3 = useTransform(blackSlider, [0, 0.4], [6,      68]);
  const y3 = useTransform(blackSlider, [0, 0.4], [100,     0]);
  const r3 = useTransform(blackSlider, [0, 0.4], [0.8,   2.5]);
  const s3 = useTransform(blackSlider, [0, 0.4], [0.92,    1]);
 
  // Resim 4 — en sağ
  const x4 = useTransform(blackSlider, [0, 0.4], [18,    220]);
  const y4 = useTransform(blackSlider, [0, 0.4], [120,     0]);
  const r4 = useTransform(blackSlider, [0, 0.4], [2,       8]);
  const s4 = useTransform(blackSlider, [0, 0.4], [0.9,     1]);
 

  return (
    <div ref={mainRef} className='overflow-clip'>
      <div className='h-dvh w-full bg-[#990933] sticky top-0 grid place-items-center'>
        <motion.div
        style={{ y: logoY }}
        className='text-center text-white'
        >
          <div className='size-52 p-10 rounded-full overflow-hidden bg-lime-50 mb-2 drop-shadow-amber-200'>
            <img src={img1} className='h-full w-full object-cover' />
          </div>
          <h3>Berk</h3>
          <p>Parallax Demo Project</p>
        </motion.div>
      </div>

      <div className='h-[300dvh] relative'>
        {imageData.map(({imgPath, caption, className, size}, i) => (
          <ScrollParallaxImgA2 key={imgPath+i} imgPath={imgPath} caption={caption} className={className} size={size} y={imageY[i]}/>
        ))}
      </div>


      {/* ── Klasör + Resim bölümü ─────────────────────────────────────── */}
      <div className='h-[300dvh] relative' ref={blackSectionRef}>
 
        {/*
          Tek sticky kapsayıcı. İçindeki katmanlar:
            1. bg-neutral-100  — arka plan rengi
            2. Resimler (z-10) — klasörün arkasında
            3. Klasör   (z-20) — resimlerin önünde, scroll ile aşağı kayar
        */}
        <div className='sticky top-0 h-dvh overflow-hidden bg-neutral-100'>
 
          {/* ── Resimler: z-10 ──────────────────────────────────────────
              flex ile yatay ortalanmış; dikey olarak viewport merkezi.
              Her resim scroll'a göre x / y / rotate / scale ile hareket eder.
              Başlangıçta y > 0 → klasörün alt kenarının gerisinde gizli.
          */}
          <div className='absolute inset-0 flex items-center justify-center z-10'>
            <motion.img
              src={img1}
              className='w-44 rounded-2xl shadow-2xl object-cover'
              style={{ x: x1, y: y1, rotate: r1, scale: s1 }}
            />
            <motion.img
              src={img1}
              className='w-44 rounded-2xl shadow-2xl object-cover'
              style={{ x: x2, y: y2, rotate: r2, scale: s2 }}
            />
            <motion.img
              src={img1}
              className='w-44 rounded-2xl shadow-2xl object-cover'
              style={{ x: x3, y: y3, rotate: r3, scale: s3 }}
            />
            <motion.img
              src={img1}
              className='w-44 rounded-2xl shadow-2xl object-cover'
              style={{ x: x4, y: y4, rotate: r4, scale: s4 }}
            />
          </div>
 
          {/* ── Klasör: z-20 ────────────────────────────────────────────
              left 12% / top 22% → yatay ve dikey ortalanmış
              width 76% / height 52% → ekranın yarısına yakın yükseklik
 
              Görsel: klasörün alt kenarı viewport'un ~%74'ünde durur.
              Resimlerin merkezi başlangıçta ~%50 + 120px ≈ %63'te,
              yani alt kenara yakın → resimlerin sadece birkaç px'i görünür.
 
              Scroll ile → y: 110vh (aşağı uçar), opacity: 0 (solar)
          */}
          <motion.div
            className='absolute z-20 rounded-3xl '
            style={{
              left: '12%',
              top: '22%',
              width: '76%',
              height: '52%',
              backgroundColor: 'rgb(23, 23, 23)',
              y: folderY,
              opacity: folderOpacity,
            }}
          />
 
        </div>
      </div>

    </div>
  )
}

export default ScrollAnimationA2