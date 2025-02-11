import { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import { Post } from "@/utils/PostInterface";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import PostCard from "../common/PostCard";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";


const VolunteerNeedNow = () => {
      const [posts, setPosts] = useState<Post[]>([]);
      const axiosSecure = useAxiosSecure();
      const [loading, setLoading] = useState(false)
      useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true)
          try {
            const res = await axiosSecure.get(`/posts?limit=8`);
            setPosts(res.data);
          } catch (err:any) {
            toast.error(err.message);
          }finally{
            setLoading(false)
          }
        };

        fetchPosts();
      }, [axiosSecure]);

        if (loading) {
          return <Spinner />;
        }
    return (
      <Wrapper>
        <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8'>
          Volunteer Needs Now Section
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />

          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link to={`/posts`}>
            <Button variant={"secondary"} size={"lg"} className='text-white'>
              See all Post
            </Button>
          </Link>
        </div>
      </Wrapper>
    );
};

export default VolunteerNeedNow;