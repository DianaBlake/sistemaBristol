import React, { useState, useEffect } from "react";
import images from "../exports/images";
import sliderM from "../estilos/slider.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
  const imagesPerGroup = 3;
  const [startIndex, setStartIndex] = useState(0);

  const group = images.slice(startIndex, startIndex + imagesPerGroup);

  const handleNext = () => {
    if (startIndex + imagesPerGroup < images.length) {
      setStartIndex(startIndex + imagesPerGroup);
    } else {
      setStartIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className={sliderM.SliderDiv}>
          <AnimatePresence>
            {group.map((image, index) => (
              <motion.div
                key={index}
                className={sliderM.item}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: -100 }}
              >
                <img src={image} alt="" />
              </motion.div>
            ))}
          </AnimatePresence>
    </div>
  );
};

export default Slider;

