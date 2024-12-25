import { Helmet } from "react-helmet-async";
import VolunterNeedNow from "./VolunterNeedNow";
import Slider from "./Slider";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Giving-Hands | Home</title>
        </Helmet>
        <Slider />
        <VolunterNeedNow />
      </div>
    );
};

export default Home;