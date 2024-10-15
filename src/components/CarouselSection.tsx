import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselSection = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Hola</CarouselItem>
        <CarouselItem>Hey</CarouselItem>
        <CarouselItem>Adios</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselSection;
