import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Wrapper from "../common/Wrapper";

import img1 from "@/assets/images/Screenshot_21.png";
import img2 from "@/assets/images/Screenshot_22.png";
import img3 from "@/assets/images/Screenshot_23.png";
import img4 from "@/assets/images/Screenshot_25.png";

// Service Data
const services = [
  {
    title: "Clean and Recycle",
    description:
      "Promote sustainable living by cleaning up communities and recycling materials to reduce waste and pollution.",
    image: img1,
  },
  {
    title: "Voluntary Support",
    description:
      "Offer your time and skills to support community-driven initiatives and make a difference in people's lives.",
    image: img2,
  },
  {
    title: "Senior Services",
    description:
      "Provide care and support to the elderly by assisting them with daily tasks and ensuring their well-being.",
    image: img3,
  },
  {
    title: "Save Earth",
    description:
      "Join the movement to combat climate change and protect our planet through collective environmental action.",
    image: img4,
  },
];

const VolunteerMakeDay = () => {
  return (
    <Wrapper>
      <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8'>
        Volunteers make each day brighter
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
        {services.map((service) => (
          <Card
            key={service.title}
            className='border-none bg-background shadow-none space-y-2 group relative overflow-hidden rounded-lg transition-all hover:shadow-lg hover:-translate-y-1 py-4 px'
          >
            <CardHeader className='space-y-1 flex flex-col items-center text-center p-1'>
              <div className='bg-primary/10 p-1 group-hover:bg-primary/50 relative rounded-full'>
                <img src={service.image} className='rounded-full w-36 h-36' />
              </div>
              <CardTitle className='text-xl'>{service.title}</CardTitle>
            </CardHeader>
            <CardContent className='text-base p-0 text-center'>
              <p className='text-muted-foreground'>{service.description}</p>
            </CardContent>
            <div className='absolute bottom-0 left-0 h-1 w-0 bg-primary/50 transition-all duration-300 group-hover:w-full' />
          </Card>
        ))}
      </div>
    </Wrapper>
  );
};

export default VolunteerMakeDay;
