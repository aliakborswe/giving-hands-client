import { useParams } from "react-router";


const ApplicationPage = () => {
    const { id } = useParams<{ id: string }>(); // TODO: this id is postId: id
    console.log(id)
    return (
        <div>
            application page
        </div>
    );
};

export default ApplicationPage;