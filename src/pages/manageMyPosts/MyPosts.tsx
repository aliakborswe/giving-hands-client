
import PostDataTable from "./PostDataTable";
const MyPosts = () => {
    


   

    return (
      <div className="space-y-20">
        {/* My Volunteer Need Posts Section */}
          <PostDataTable />
        {/* My Volunteer Need Posts Section */}
        <section>
          <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
            My Volunteer Request Posts
          </h1>
        </section>
      </div>
    );
};

export default MyPosts;