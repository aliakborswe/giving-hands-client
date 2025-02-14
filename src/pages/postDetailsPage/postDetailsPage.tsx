import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Spinner from "../common/Spinner";
import Wrapper from "../common/Wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/utils/PostInterface";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { cn } from "@/lib/utils";

const PostDetailsPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err:any) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [axiosSecure, id]);

  // handle Be a Volunteer button
  const handleBeVolunteerBtn = (id: string) => {
    if(post && Number(post.volunteersNeeded) > 0){
      navigate(`/application/${id}`);
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No more volunteers needed!",
      });
    }
  }

  if (loading) {
    return <Spinner />;
  }
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <Wrapper>
      <Helmet>
        <title>Giving-Hands | Details Volunteer Post</title>
      </Helmet>
      <Card>
        <CardContent className='p-4 flex flex-col lg:flex-row gap-4 justify-center items-center'>
          <div className='w-full lg:w-1/2 lg:h-full mb-4 '>
            <img
              src={post.thumbnail}
              alt={post.postTitle}
              className='rounded-md w-full h-full object-cover'
            />
          </div>
          <div className=' w-full lg:w-1/2 text-text'>
            <div className='text-sm flex justify-center gap-2 bg-secondary text-white w-44 p-2 rounded-tl-2xl rounded-br-2xl shadow-lg [&_span]:font-semibold'>
              <span>Category:</span>
              {post.category}
            </div>
            <h3 className='text-xl font-bold my-2'>{post.postTitle}</h3>
            <div className='text-base [&_span]:font-semibold space-y-2 '>
              <div>
                <span>Deadline: </span>
                {post.deadline}
              </div>
              <div>
                <span>Location: </span>
                {post.location}
              </div>
              <div>
                <span>Organizer Email: </span>
                {post.organizerEmail}
              </div>
              <div>
                <span>Organizer Name: </span>
                {post.organizerName}
              </div>
              <div>
                <span>Volunteers Needed: </span>
                {post.volunteersNeeded}
              </div>
              <div>
                <strong>Status: </strong>
                <span
                  className={cn({
                    "text-red-600": post.volunteersNeeded == "0",
                    "text-green-600": post.volunteersNeeded != "0",
                  })}
                >
                  {post.volunteersNeeded}
                </span>
              </div>
            </div>
            <p className='py-2'>{post.description}</p>
            <Button
              onClick={() => handleBeVolunteerBtn(post._id)}
              className='w-full'
            >
              Be a Volunteer
            </Button>
          </div>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default PostDetailsPage;
