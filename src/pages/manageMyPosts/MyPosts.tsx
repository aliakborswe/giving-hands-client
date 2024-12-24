import { useEffect, useState } from "react";
import DynamicDataTable from "./PostDataTable";
import Wrapper from "../common/Wrapper";
import { Post } from "@/utils/PostInterface";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useAuth from "@/hooks/useAuth";
import Spinner from "../common/Spinner";

const MyPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();


    useEffect(()=>{
        const fetchPosts = async () => {
            setLoading(true);
            try {
              const res = await axiosSecure.get(
                `/postByEmail?email=${user?.email}`
              );
              setPosts(res.data);
            } catch (err) {
              console.error(err);
            } finally {
              setLoading(false);
            }
          };
    
          fetchPosts();
    },[ axiosSecure, user?.email]);

    if (loading) {
      return <Spinner />;
    }

    return (
      <Wrapper className="space-y-20">
        {/* My Volunteer Need Posts Section */}
        <section>
          <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
            My Volunteer Need Posts
          </h1>
          <DynamicDataTable data={posts} />
        </section>
        {/* My Volunteer Need Posts Section */}
        <section>
          <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
            My Volunteer Request Posts
          </h1>
        </section>
      </Wrapper>
    );
};

export default MyPosts;