"use client";
import Icons from "@/components/shared/icons";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ classes, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((current) => {
      if (current === images.length - 1) return 0;
      return current + 1;
    });
  };

  const prevImage = () => {
    setCurrentImage((current) => {
      if (current === 0) return images.length - 1;
      return current - 1;
    });
  };

  return (
    <div className={`w-full flex flex-col sm:flex-row gap-5 ${classes}`}>
      <div className="relative w-full sm:w-2/3 flex flex-col justify-center items-center bg-yellow-light rounded-lg p-5 sm:p-0">
        <Image
          src={images[currentImage]}
          alt="food image"
          width={406}
          height={412}
        />
        <div className="sm:absolute bottom-2 sm:bottom-10  right-10 flex gap-5">
          <button
            className="w-12 h-12 rounded-full bg-white text-yellow-light border border-yellow-ligh flex justify-center items-center"
            onClick={prevImage}
          >
            <Icons name="ChevronRight" />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-white text-yellow-light border border-yellow-ligh flex justify-center items-center"
            onClick={nextImage}
          >
            <Icons name="ChevronLeft" />
          </button>
        </div>
      </div>
      <div className="w-full sm:w-1/3 flex flex-col gap-5">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => {
              setCurrentImage(index);
            }}
            className={`${
              currentImage === index ? "" : "brightness-25"
            } relative border-2 border-yellow-light bg-white flex justify-center items-center rounded-lg py-2`}
          >
            <Image src={image} width={194} height={195} />
            {currentImage === index && (
              <Image
                src={"/images/Polygon 1.png"}
                width={20}
                height={20}
                alt={"neshangar"}
                className="absolute top-1/2 left-full z-20 -translate-y-1/2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
