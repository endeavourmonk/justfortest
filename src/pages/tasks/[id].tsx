import { useRouter } from 'next/router';
import TaskDetails from '@/components/taskDetails';
import { TASKS_URL } from '@/constants/url';
import PageNotFound from '@/pages/404';
import details from '@/components/taskDetails';
import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';
const TaskDetailsPage = () => {
    const router = useRouter();
    const id = router.query?.id as string;
    const TASK_DETAILS_URL = `${TASKS_URL}/${id}/details`;

    if (!id) {
        return <PageNotFound />;
    }
    // let receivedData: any;
    // const receivedDataString = localStorage.getItem('tskdts');
    // if (receivedDataString) {
    //     receivedData = JSON.parse(receivedDataString);
    //     console.log('received data', receivedData); // { name: 'John', age: 25 }
    // } else {
    //     console.log('Data not found');
    // }
    // console.log('passed details', details);

    return (
        <>
            {/* <LinkPreviewCard taskDetails={receivedData} /> */}
            <TaskDetails url={TASK_DETAILS_URL} taskID={id} />;
        </>
    );
};
export default TaskDetailsPage;
