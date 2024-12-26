import { Helmet } from "react-helmet-async";
import Wrapper from "../common/Wrapper";
import handsImg from "@/assets/images/Screenshot_24.png";
import bannerImg from "@/assets/images/bg.jpg";
import ActivityGallery from "./ActivityGallery";


const About = () => {
  return (
    <>
      <Helmet>
        <title>Giving-Hands | About</title>
      </Helmet>
      <section className='relative min-h-[500px] flex items-center'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <img
            src={bannerImg}
            alt='Mountain landscape'
            className='object-cover w-full h-full'
          />
          <div className='absolute inset-0 bg-black/50' />
        </div>

        <div className='container mx-auto px-2.5 py-12 md:py-24 relative z-10'>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            {/* Text Content */}
            <div className='text-white space-y-6'>
              <div className='inline-block bg-primary/90 px-4 py-2 rounded-md'>
                <h2 className='text-sm font-semibold tracking-wide'>
                  ABOUT US
                </h2>
              </div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Together we protect the earth
              </h1>
              <p className='text-lg text-gray-200'>
                Together We Protect the Earth" emphasizes the collective effort
                required to preserve our planet for future generations. It
                serves as a call to action, inspiring individuals, communities,
                and organizations to unite in combating environmental
                challenges. From reducing waste and promoting sustainable
                practices to conserving natural resources and protecting
                wildlife, every small action contributes to a healthier, greener
                Earth. Together, we can create a harmonious balance between
                progress and preservation, ensuring the beauty and vitality of
                our planet endure for generations to come.
              </p>
            </div>

            {/* Image */}
            <div className='relative aspect-square max-w-md mx-auto'>
              <img
                src={handsImg}
                alt='Team collaboration'
                className='rounded-lg shadow-xl w-[400px] h-[400px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>
      <ActivityGallery/>
    </>
  );
};

export default About;
