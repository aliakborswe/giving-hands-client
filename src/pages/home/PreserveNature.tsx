import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Wrapper from "../common/Wrapper";

import img2 from "@/assets/images/recycle.png";
import img3 from "@/assets/images/world-in-handsfix.png";
import img1 from "@/assets/images/plant-handfix.png";

// Service Data
const services = [
  {
    title: "01. Reforestation",
    description:
      "Planting trees to restore forests and improve the environment.",
    image: img1,
  },
  {
    title: "02. Recyling Waste",
    description:
      "Transforming waste materials into reusable resources to reduce pollution.",
    image: img2,
  },
  {
    title: "03. Voluntary Effort",
    description:
      "Encouraging community participation for environmental conservation.",
    image: img3,
  },
];

const PreserveNature = () => {
  return (
    <Wrapper>
      <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8'>
        3 steps to preserve nature
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 '>
        {services.map((service) => (
          <Card
            key={service.title}
            className='border-none bg-background shadow-none space-y-2 group relative overflow-hidden rounded-lg transition-all hover:shadow-lg  pb-2'
          >
            <CardHeader className='space-y-1 flex flex-col items-center text-center p-1'>
              <div className='bg-primary/10 p-1 relative rounded-full'>
                <img src={service.image} className='rounded-full w-36 h-36' />
                <div className='absolute inset-0 rounded-full group-hover:bg-green-500/50 transition-all' />
              </div>
              <CardTitle className='text-xl'>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className='text-base p-0 text-center'>
              <p className='text-muted-foreground'>{service.description}</p>
            </CardContent>
            <div className='absolute bottom-0 left-0 h-1 w-0 bg-green-500/50 transition-all duration-300 group-hover:w-full' />
          </Card>
        ))}
      </div>
    </Wrapper>
  );
};

export default PreserveNature;