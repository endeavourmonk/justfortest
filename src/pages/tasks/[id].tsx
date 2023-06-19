import { useRouter } from 'next/router';
import TaskDetails from '@/components/taskDetails';
import { TASKS_URL } from '@/constants/url';
import PageNotFound from '@/pages/404';
// import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';
const TaskDetailsPage = () => {
    const router = useRouter();
    const id = router.query?.id as string;
    const TASK_DETAILS_URL = `${TASKS_URL}/${id}/details`;

    if (!id) {
        return <PageNotFound />;
    }

    return <TaskDetails url={TASK_DETAILS_URL} taskID={id} />;
    // return (
    //     <div>
    //         {/* <LinkPreviewCard /> */}
    //         <TaskDetails url={TASK_DETAILS_URL} taskID={id} />
    //     </div>
    // );
};
export default TaskDetailsPage;
