import { Carousel, Typography, Button } from "@material-tailwind/react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DownloadingIcon from '@mui/icons-material/Downloading';

export function CarouselCustomNavigation() {
  return (
    <Carousel className="rounded-xl">
    <div className="relative h-full w-full">
      <img
        src="https://i.postimg.cc/7LxBc9rS/cover-2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            Still Amazed
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-6 mt-0 opacity-80"
          >
              Miles Beauchamp
          </Typography>
          <div className="flex gap-2">
            <Button onClick={ () => {location.href = 'https://www.amazon.com/Still-Amazed-Collection-Miles-Beauchamp/dp/1734885734/'}} size="lg" color="white">
             <ShoppingCartIcon /> Buy
            </Button>
            <Button onClick={ () => {location.href = '#'}} size="lg" color="white/75">
              <AutoStoriesIcon /> Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.postimg.cc/Njk6PgJY/cover-0.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Cancun (Evil Leaves a Trail)
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 mt-0 opacity-80"
            >
                Miles Beauchamp
            </Typography>
            <div className="flex gap-2">
              <Button onClick={ () => {location.href = '#'}} size="lg" color="white">
               <DownloadingIcon /> Coming soon
              </Button>
              <Button onClick={ () => {location.href = '#'}} size="lg" color="white/75">
               <AutoStoriesIcon /> Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.postimg.cc/SxLTD53y/cover-3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Disabled Literature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 mt-0 opacity-80"
            >
                Miles Beauchamp
            </Typography>
            <div className="flex gap-2">
              <Button onClick={ () => {location.href = 'https://www.amazon.com/Disabled-Literature-Examination-Disabilities-Contemporary-ebook/dp/B0116IBL5M/'}} size="lg" color="white">
               <ShoppingCartIcon /> Buy
              </Button>


              <Button onClick={ () => {location.href = '#'}} size="lg" color="white/75">
               <AutoStoriesIcon /> Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://i.postimg.cc/gJjgc0JJ/cover-1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Down at the Pier 
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 mt-0 opacity-80"
            >
                Miles Beauchamp
            </Typography>
            <div className="flex gap-2">
              <Button onClick={ () => {location.href = 'https://www.amazon.com/Down-at-Pier-Miles-Beauchamp-ebook/dp/B0817R38CK/'}} size="lg" color="white">
               <ShoppingCartIcon /> Buy
              </Button>

              <Button onClick={ () => {location.href = '#'}} size="lg" color="white/75">
               <AutoStoriesIcon /> Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
export default CarouselCustomNavigation;
