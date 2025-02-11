import Wrapper from "../common/Wrapper";
import img1 from "@/assets/images/g1.jpg";
import img2 from "@/assets/images/g2.jpg";
import img3 from "@/assets/images/g3.jpg";
import img4 from "@/assets/images/g4.jpg";
import img5 from "@/assets/images/g5.jpg";
import img6 from "@/assets/images/g6.jpg";
import img7 from "@/assets/images/g7.jpg";
import img8 from "@/assets/images/g8.jpg";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: img1,
    alt: "Forest cleanup activity",
    caption:
      "A group of people clean up the trash at the exit to the forest, in the spring.",
  },
  {
    src: img2,
    alt: "Volunteer huddle",
    caption: "Group of volunteer forming huddles in park",
  },
  {
    src: img3,
    alt: "Park planting activity",
    caption: "Group of volunteer planting in park",
  },
  {
    src: img4,
    alt: "Beach cleanup",
    caption: "A volunteer picking garbage at the beach.",
  },
  {
    src: img5,
    alt: "Environmental volunteers",
    caption: "Cheerful environmental volunteers with full trash bags",
  },
  {
    src: img6,
    alt: "Wood cleaning activity",
    caption: "Team of volunteers cleaning wood from trash",
  },
  {
    src: img7,
    alt: "Footpath cleanup",
    caption: "Young volunteers picking up garbage in bag on footpath.",
  },
  {
    src: img8,
    alt: "Park volunteers",
    caption: "Group of volunteer having fun in park",
  },
];

const ActivityGallery = () => {
  return (
    <section className='py-12 px-4 md:py-16 lg:py-20'>
      <Wrapper>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Activity Gallery
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Explore a collection of vibrant moments and activities that showcase
            our commitment to creating a positive impact. Dive into the gallery
            to witness the energy and dedication behind our initiatives.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {galleryItems.map((item, index) => (
            <div key={index} className='group'>
              <div className='relative aspect-[4/3] overflow-hidden rounded-lg mb-3'>
                <img
                  src={item.src}
                  alt={item.alt}
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <p className='text-sm text-center text-muted-foreground'>
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ActivityGallery;
