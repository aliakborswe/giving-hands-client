import { Helmet } from "react-helmet-async";
import VolunteerNeedNow from "./VolunteerNeedNow";
import Slider from "./Slider";
import VolunteerMakeDay from "./VolunteerMakeDay";
import FAQ from "./FAQ";
import ContactInfo from "./ContactInfo";
import PreserveNature from "./PreserveNature";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Giving-Hands | Home</title>
        </Helmet>
        <Slider />
        <VolunteerMakeDay/>
        <VolunteerNeedNow />
        <PreserveNature/>
        <FAQ/>
        <ContactInfo/>
      </div>
    );
};

export default Home;