import { Helmet } from "react-helmet-async";
import Wrapper from "../common/Wrapper";
import PostDataTable from "./PostDataTable";
import RequestVolunteerDataTable from "./RequestVolunteerDataTable";
const MyPosts = () => {
  return (
    <Wrapper className='space-y-12'>
      <Helmet>
        <title>Giving-Hands | Manage Volunteer</title>
      </Helmet>
      {/* My Volunteer Need Posts Section */}
      <section>
        <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
          My Volunteer Need Posts
        </h1>
        <PostDataTable />
      </section>
      {/* My Volunteer Need Posts Section */}
      <section>
        <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
          My Volunteer Request Posts
        </h1>
        <RequestVolunteerDataTable />
      </section>
      {/* Be a Admin Section */}
      <section>
        <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
          Be A Admin Handle Volunteer Application on My Posts
        </h1>
        {/* TODO: Add Be A Admin Handle Volunteer Application on My Posts  */}
      </section>
    </Wrapper>
  );
};

export default MyPosts;
