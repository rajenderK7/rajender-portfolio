import Image from "next/image";
import React from "react";

interface ImageProps {
  image: any;
}

const TechLogo = ({ image }: ImageProps) => {
  return (
    <div className="mx-3 my-2 h-16 w-16 lg:h-20 lg:w-20 rounded-md border-gray-300 border-2 p-2 shadow-md hover:scale-110 duration-100 ease-out">
      <Image src={image} objectFit="contain" layout="responsive" />
    </div>
  );
};

export default TechLogo;
