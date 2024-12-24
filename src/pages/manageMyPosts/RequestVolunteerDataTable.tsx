import { useEffect, useState } from "react";
import Wrapper from "../common/Wrapper";
import useAuth from "@/hooks/useAuth";
import Spinner from "../common/Spinner";
import { useNavigate } from "react-router";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Post } from "@/utils/PostInterface";
import { Button } from "@/components/ui/button";
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

interface ApplicationInter {
  _id: string;
  postId: Post;
  requestStatus: string;
  suggestion: string;
}

const RequestVolunteerDataTable = () => {
  const [applications, setApplications] = useState<ApplicationInter[]>([]);
  const [isGridView, setIsGridView] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  console.log("applications", applications);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axiosSecure.get(`/applications?email=${user?.email}`);
        setApplications(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [axiosSecure, user?.email]);

  if (loading) {
    return <Spinner />;
  }
  if (applications.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-3xl font-bold'>No data found</h1>
      </div>
    );
  }

  return (
    <Wrapper>
      <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold pb-8 border-b border-primary mb-4'>
        My Volunteer Request Posts
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
            {applications.map(
              ({
                _id,
                requestStatus,
                suggestion,
                postId: { postTitle, thumbnail, location },
              }) => (
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
                        <strong>Suggestion:</strong> {suggestion}
                      </p>
                      <p>
                        <strong>Request Status:</strong>{" "}
                        <span
                          className={`bg-${
                            requestStatus === "requested"
                              ? "yellow-500"
                              : "red-500"
                          } bg-${
                            requestStatus === "approved"
                              ? "green-500"
                              : "red-500"
                          } py-1 px-3 rounded-md`}
                        >
                          {requestStatus}
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
                <TableHead>Suggestion</TableHead>
                <TableHead>Request Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map(
                (
                  {
                    _id,
                    requestStatus,
                    suggestion,
                    postId: { postTitle, thumbnail, location },
                  },
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
                    <TableCell>{suggestion}</TableCell>
                    <TableCell>
                      <span
                        className={`bg-${
                          requestStatus === "requested"
                            ? "yellow-500"
                            : "red-500"
                        } bg-${
                          requestStatus === "approved" ? "green-500" : "red-500"
                        } py-1 px-3 rounded-md`}
                      >
                        {requestStatus}
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

export default RequestVolunteerDataTable;
