import { Helmet } from "react-helmet-async";
import VolunteerNeedNow from "./VolunteerNeedNow";
import Slider from "./Slider";
import VolunteerMakeDay from "./VolunteerMakeDay";
import FAQ from "./FAQ";
import ContactInfo from "./ContactInfo";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Giving-Hands | Home</title>
        </Helmet>
        <Slider />
        <VolunteerMakeDay/>
        <VolunteerNeedNow />
        <FAQ/>
        <ContactInfo/>
      </div>
    );
};

export default Home;