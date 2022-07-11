import React, { useRef, useEffect } from "react";
import Image from "next/image";

const Photo = ({ src, type = "image/webp", fallback, alt, ...delegated }) => {
  const image = useRef(null);
  return (
    <picture>
      <source srcSet={src.src} type={type} />
      <img src={src.src} alt={alt} {...delegated} layout="responsive" />
    </picture>
  );
};

export default Photo;
