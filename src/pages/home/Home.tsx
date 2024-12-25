import { Helmet } from "react-helmet-async";
import VolunteerNeedNow from "./VolunteerNeedNow";
import Slider from "./Slider";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Giving-Hands | Home</title>
        </Helmet>
        <Slider />
        <VolunteerNeedNow />
      </div>
    );
};

export default Home;