import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import { Post } from "@/utils/PostInterface";
import PostCard from "../common/PostCard";
import Spinner from "../common/Spinner";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get(`/posts`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
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
        All Need Volunteer Post
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Posts;
