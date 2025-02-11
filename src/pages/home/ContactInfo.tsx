import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import bgImage from "@/assets/images/rb_30208.png";

const contactInfo = [
  {
    icon: MapPin,
    info: "Mirpur-13, Dhaka, Bangladesh",
    href: "https://www.google.com/maps/place/23%C2%B048'32.1%22N+90%C2%B022'44.6%22E/@23.8089179,90.3605959,15z/data=!3m1!4b1!4m7!1m2!2m1!1smirpur+13!3m3!8m2!3d23.808919!4d90.37905?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Phone,
    info: "+880 1804555186",
    href: "tel:+880 1804555186",
  },
  {
    icon: Mail,
    info: "admin@astzo.com",
    href: "mailto:admin@astzo.com",
  },
];

const ContactInfo = () => {
  return (
    <section className='relative min-h-[400px] flex items-center justify-center'>
      {/* Background Image */}
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <img
          src={bgImage}
          alt='Mountain landscape'
          className='object-cover w-full h-full'
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>
      {/* Content */}
      <div className='container mx-auto px-4 py-16 relative z-10 text-white'>
        <div className='max-w-3xl mx-auto text-center space-y-8'>
          <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Get In Touch
          </h2>
          <p className='text-lg  max-w-2xl mx-auto'>
            Have questions or want to learn more about our volunteering
            opportunities? We’d love to hear from you! Feel free to reach out to
            us, and we’ll get back to you promptly.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {contactInfo.map((item) => (
              <Card
                key={item.info}
                className='border-none bg-white/60 backdrop-blur-sm'
              >
                <CardContent className='flex flex-col items-center p-6 text-center'>
                  <div className='rounded-full bg-primary/10 p-3 mb-4'>
                    <item.icon className='h-6 w-6 text-primary' />
                  </div>
                  <a
                    href={item.href}
                    className='text-sm hover:text-primary transition-colors'
                  >
                    {item.info}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
