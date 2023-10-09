import React, { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, slides]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        onClick={goToPrevious}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "-100px",
          fontSize: "32px",
          color: "#fff",
          cursor: "pointer",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
        }}
      >
        ❮
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: "1",
        }}
      >
        {currentSlide}
      </div>
      <div
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "-100px",
          fontSize: "32px",
          color: "#fff",
          cursor: "pointer",
          zIndex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
        }}
      >
        ❯
      </div>
    </div>
  );
};

export { Carousel };
