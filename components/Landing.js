import { useEffect, useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
// import useSound from 'use-sound';
// const boopSfx = 'https://mehedi-dev.s3.ap-south-1.amazonaws.com/resources/sound.mp3'


export default function LandingCarousel() {
  // const [play] = useSound(boopSfx, { volume: 0.10 });
  // const [isReady, setIsReady] = useState(false);

  
  useEffect(() => {
    return () => {
      {play}
      console.log("Firing on mount and not on cleanup");
    };
  }, []);

  return (
    <Carousel className="rounded-xl">
      <div className="relative h-60vh w-full">
        <img
          src="https://i.postimg.cc/ZYFSzyJQ/S-2.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Words + Dreams
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We communicate, we dream wistfully about the past and predict the future with hope and fear as we struggle to create our vision of a perfect world. 
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.postimg.cc/rFf2KX0C/S-1.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Words + Dreams
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Miles Beauchamp
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}