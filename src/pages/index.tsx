import { FC } from 'react';
import Head from '@/components/head';
import Layout from '@/components/Layout';
import classNames from '@/styles/tasks.module.scss';
import { TasksContent } from '@/components/tasks/TasksContent';
import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';
// import fetch from '@/helperFunctions/fetch';
// import { useRouter } from 'next/router';
// import { TASKS_URL } from '@/constants/url';
// import details from '@/components/taskDetails/index';

// console.log('details', details);

// const Index = ({ details }: { details: any }) => {
const Index = () => {
    return (
        <Layout>
            {/* <LinkPreviewCard taskDetails={receivedData} /> */}
            <Head title="Tasks" />

            <div className={classNames.container}>
                <TasksContent />
            </div>
        </Layout>
    );
};

// async function fetchData() {
//     // const router = useRouter();
//     // const id = router.query?.id as string;
//     // const TASK_DETAILS_URL = `${TASKS_URL}`;
//     const TASK_DETAILS_URL = `${TASKS_URL}/${id}/details`;
//     // const TASK_DETAILS_URL = 'https://staging-api.realdevsquad.com/tasks';
//     const { requestPromise } = fetch({
//         url: `${TASK_DETAILS_URL}`,
//     });

//     const res = await requestPromise;
//     return res.tasks;
// }

// export const getServerSideProps = async () => {
//     const data = await fetchData();
//     console.log('data: ', data);
//     const result = await data.json();
//     console.log('Result: ', result);
//     const details = {
//         taskTitle: result[0].title,
//         taskStartDate: result[0].startedOn,
//         taskEndDate: result[0].endsOn,
//         taskDescription: 'description of the task',
//         assignee: result[0].assignee,
//         reporter: result[0].createdBy,
//         taskImage: 'https://realdevsquad.com/img/Real-Dev-Squad@1x.png',
//         taskURL: 'https://justfortest.vercel.app/',
//     };

//     return { props: { details } };
// };

export default Index;
