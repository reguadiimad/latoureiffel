import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function InscriptionFirstInterface() {
  const language = useSelector((state) => state.presntion.language);
  const containerRef = useRef(null);
  const angleRefs = useRef([0, 0, 0, 0]);

  useEffect(() => {
    const totalCircles = 4;
    const totalDotsPerCircle = 30;
    const radiusStep = 20; // ⬅️ smaller spacing
    const baseRadius = 60;
    const centerX = 150;
    const centerY = 150;

    const container = containerRef.current;
    const dotGroups = Array.from({ length: totalCircles }, (_, i) =>
      container.querySelectorAll(`.dot-group-${i}`)
    );

    const speeds = [0.01, 0.008, 0.006, 0.004];

    let animationFrameId;

    const animate = () => {
      dotGroups.forEach((dots, circleIndex) => {
        const radius = baseRadius + circleIndex * radiusStep;
        const totalDots = dots.length;
        angleRefs.current[circleIndex] += speeds[circleIndex];

        dots.forEach((dot, i) => {
          const angle = (i / totalDots) * 2 * Math.PI + angleRefs.current[circleIndex];
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          dot.style.left = `${x}px`;
          dot.style.top = `${y}px`;
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const colors = [
    "bg-blue-500",
    "bg-the-gray",
    "bg-red-500",
    "bg-apple-light", // will use inline style for custom "apple-light"
  ];

  const appleLight = "#A8E6CF";

  return (
    <motion.div
      ref={containerRef}
      className="relative w-[300px] h-[300px] mx-auto mt-40 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <motion.img initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{type:"spring"}} className="w-28 h-28 -mr-2" src={process.env.PUBLIC_URL+"/logos/trf.png"}/>
      {[0, 1, 2, 3].map((circleIndex) =>
        Array.from({ length: 30 }).map((_, dotIndex) => {
          const delay = (circleIndex * 0.2) + (dotIndex * 0.005);
          return (
            <motion.div
              key={`circle-${circleIndex}-dot-${dotIndex}`}
              className={`dot dot-group-${circleIndex} absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 ${colors[circleIndex]}`}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay,type:"spring"
              }}
              style={{
                width: `${6 + circleIndex * 2}px`,
                height: `${6 + circleIndex * 2}px`,
                
              }}
            />
          );
        })
      )}
    </motion.div>
  );
}
