import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Post } from "@/utils/PostInterface";
import { Link } from "react-router";


type Prop ={
    post: Post
}

const PostCard = ({post}: Prop) => {
    return (
      <Card className='w-full h-full flex flex-col bg-white text-black'>
        <CardContent className='p-4 flex-grow'>
          <div className='aspect-w-16 aspect-h-9 mb-4'>
            <img
              src={post.thumbnail}
              alt={post.postTitle}
              className='rounded-md aspect-video'
            />
          </div>
          <h3 className='text-lg font-semibold mb-2'>{post.postTitle}</h3>
          <div className='space-y-2 text-sm [&_span]:font-semibold'>
            <div className='text-sm flex gap-2 '>
              <span>Category:</span>
              {post.category}
            </div>
            <div className='text-sm flex gap-2'>
              <span>Deadline:</span>
              {post.deadline}
            </div>
            <div className='flex gap-2 items-center'>
              <span>Location:</span>
              {post.location}
            </div>
            <div>
              <strong>Status: </strong>
              <span
                className={`bg-${
                  post.status === "Ongoing" ? "green" : "red"
                }-500 py-0.5 px-3 rounded-sm`}
              >
                {post.status}
              </span>
            </div>
            <div>
              <span>Volunteers Needed: </span>
              {post.volunteersNeeded}
            </div>
          </div>
        </CardContent>
        <CardFooter className='px-4'>
          <Link to={`/posts/${post._id}`} className='w-full'>
            <Button className='w-full'>View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    );
};

export default PostCard;