import { Helmet } from "react-helmet-async";
import VolunterNeedNow from "./VolunterNeedNow";


const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Giving-Hands | Home</title>
        </Helmet>
        <VolunterNeedNow />
      </div>
    );
};

export default Home;