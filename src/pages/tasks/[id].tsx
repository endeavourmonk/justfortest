import { useRouter } from 'next/router';
import TaskDetails from '@/components/taskDetails';
import { TASKS_URL } from '@/constants/url';
import PageNotFound from '@/pages/404';
import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';
import {
    useGetTaskDetailsQuery,
    useUpdateTaskDetailsMutation,
} from '@/app/services/taskDetailsApi';
import { taskDetailsDataType } from '@/interfaces/taskDetails.type';

const TaskDetailsPage = () => {
    const router = useRouter();
    const id = router.query?.id as string;
    const TASK_DETAILS_URL = `${TASKS_URL}/${id}/details`;

    if (!id) {
        return <PageNotFound />;
    }

    const { data, isError, isLoading } = useGetTaskDetailsQuery(id);
    const taskDetails: any = data?.taskData;

    return (
        <>
            <LinkPreviewCard taskDetails={taskDetails} />
            <TaskDetails url={TASK_DETAILS_URL} taskID={id} />;
        </>
    );
};
export default TaskDetailsPage;
