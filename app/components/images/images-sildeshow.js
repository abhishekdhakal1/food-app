"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import Burger from "@/assests/burger.jpg";
import Cheese from "@/assests/cheese.jpg";
import Chicken from "@/assests/chicken.jpg";
import Donout from "@/assests/donout.jpg";
import Dumplings from "@/assests/dumplings.jpg";
import Food from "@/assests/food.jpg";
import Salad from "@/assests/salad.jpg";
import classes from "./images-slideshow.module.css"

const images = [
  { image: Burger, alt: "burger image" },
  { image: Cheese, alt: "cheese image" },
  { image: Chicken, alt: "chicken image" },
  { image: Donout, alt: "burger image" },
  { image: Dumplings, alt: "donout image" },
  { image: Food, alt: "food image" },
  { image: Salad, alt: "salad image" },
];

export default function ImageSlideshow() {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className={classes.slideshow}>
        {images.map((image, index) => (
          <Image
            src={image.image}
            key={index}
            className={
              index === imageIndex
                ? classes.active
                : ""
            }
            alt={image.alt}
          />
        ))}
      </div>
    </>
  );
}
