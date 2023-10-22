import React, { useState } from "react";
import images from "../exports/images";
import sliderM from "../estilos/slider.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

const Slider = () => {
  const imagesPerGroup = 3;
  const [startIndex, setStartIndex] = useState(0);

  const group = images.slice(startIndex, startIndex + imagesPerGroup);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - imagesPerGroup);
    }
  };

  const handleNext = () => {
    if (startIndex + imagesPerGroup < images.length) {
      setStartIndex(startIndex + imagesPerGroup);
    }
  };

  return (
    <div className={sliderM.SliderDiv}>
    <motion.div className={sliderM.slidercontainer}>
      <motion.div className={sliderM.slider} drag="x" dragConstraints={{ right: 0, left: -900 }}>
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
      </motion.div >
      
      <button onClick={handlePrev} className={sliderM.navButton1}>
        <VscArrowLeft/>
      </button>
      <button onClick={handleNext} className={sliderM.navButton2}>
        <VscArrowRight/>
      </button>
    </motion.div>
    </div>
  );
};

export default Slider;
