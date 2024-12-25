import { Helmet } from "react-helmet-async";
import VolunteerNeedNow from "./VolunteerNeedNow";
import Slider from "./Slider";
import VolunteerMakeDay from "./VolunteerMakeDay";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Giving-Hands | Home</title>
        </Helmet>
        <Slider />
        <VolunteerMakeDay/>
        <VolunteerNeedNow />
      </div>
    );
};

export default Home;