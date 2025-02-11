import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Post } from "@/utils/PostInterface";
import { Link } from "react-router";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Card className='w-full h-full flex flex-col bg-background '>
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
          <div className='text-sm flex gap-2'>
            {post.deadline}
          </div>
          <div className='flex gap-2 items-center'>
            {post.location}
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
