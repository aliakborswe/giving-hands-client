import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { LayoutGrid, Pencil, TableIcon, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Post } from "@/utils/PostInterface";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import useAuth from "@/hooks/useAuth";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import Wrapper from "../common/Wrapper";

const PostDataTable = () => {
  const [isGridView, setIsGridView] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

   useEffect(() => {
     const fetchPosts = async () => {
       setLoading(true);
       try {
         const res = await axiosSecure.get(`/postByEmail?email=${user?.email}`);
         setPosts(res.data);
       } catch (err) {
         console.error(err);
       } finally {
         setLoading(false);
       }
     };

     fetchPosts();
   }, [axiosSecure, user?.email]);

   

  // handle Edit button
  const handleEdit = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Update this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/updateVolunteerNeedPost/${id}`);
      }
    });
  };

  // handle Delete button
  const handleDelete = async (id: string) => {
    try{
      Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/posts?id=${id}`).then(() => {
          setPosts(posts.filter((post) => post._id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          
        });
      }
    });
    }catch(err:any){
      toast.error(err.message);
    }
  };


  if (loading) {
    return <Spinner />;
  }
  if (posts.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-3xl font-bold'>No data found</h1>
      </div>
    );
  }
  return (
    <Wrapper>
      <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
        My Volunteer Need Posts
      </h1>
      <div className='flex justify-end mb-4'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => setIsGridView(!isGridView)}
          className='border-2 border-primary'
        >
          {isGridView ? (
            <TableIcon className='h-4 w-4' />
          ) : (
            <LayoutGrid className='h-4 w-4' />
          )}
        </Button>
      </div>
      {isGridView ? (
        <>
          {/* Grid view */}
          <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
            {posts.map(
              ({ _id, postTitle, thumbnail, status, location, deadline }) => (
                <Card key={_id} className='flex justify-center items-center'>
                  <div className='w-1/3 h-full'>
                    <img
                      className='w-full h-full rounded-tl-xl rounded-bl-xl object-cover'
                      src={thumbnail}
                      alt={postTitle}
                    />
                  </div>
                  <div className='w-2/3'>
                    <CardHeader>
                      <CardTitle>{postTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className='text-sm space-y-2'>
                      <p>
                        <strong>Location:</strong> {location}
                      </p>
                      <p>
                        <strong>Deadline:</strong> {deadline}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        <span
                          className={`bg-${
                            status === "Ongoing" ? "green" : "red"
                          }-500 py-0.5 px-3 rounded-sm`}
                        >
                          {status}
                        </span>
                      </p>
                      <div className='flex gap-2 pt-4'>
                        <Button
                          variant={"default"}
                          size={"sm"}
                          onClick={() => handleEdit(_id)}
                        >
                          Update
                        </Button>
                        <Button
                          variant={"destructive"}
                          size={"sm"}
                          onClick={() => handleDelete(_id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            )}
          </div>
        </>
      ) : (
        <>
          {/* Table view */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.map(
                (
                  { _id, postTitle, thumbnail, status, location, deadline },
                  index
                ) => (
                  <TableRow key={_id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <img
                        className='w-10 h-10 rounded-full'
                        src={thumbnail}
                        alt={postTitle}
                      />
                    </TableCell>
                    <TableCell>{postTitle}</TableCell>
                    <TableCell>{location}</TableCell>
                    <TableCell>{deadline}</TableCell>
                    <TableCell>
                      <span
                        className={`bg-${
                          status === "Ongoing" ? "green" : "red"
                        }-500 py-1 px-3 rounded-md`}
                      >
                        {status}
                      </span>
                    </TableCell>
                    <TableCell className='flex divide-x-2 divide-emerald-400'>
                      <span
                        onClick={() => handleEdit(_id)}
                        className='cursor-pointer text-primary pr-2'
                      >
                        <Pencil />
                      </span>

                      <span
                        onClick={() => handleDelete(_id)}
                        className='cursor-pointer text-red-500 pl-2'
                      >
                        <Trash2 />
                      </span>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </>
      )}
    </Wrapper>
  );
};

export default PostDataTable;
