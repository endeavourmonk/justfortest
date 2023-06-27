import { FC } from 'react';
import Head from '@/components/head';
import Layout from '@/components/Layout';
import classNames from '@/styles/tasks.module.scss';
import { TasksContent } from '@/components/tasks/TasksContent';
import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';
import { fetchTaskDetails } from './tasks/[id]';

const taskDetails = fetchTaskDetails();
console.log('title', taskDetails);
const taskURL = 'adfad';
const Index = () => {
    return (
        <Layout>
            <LinkPreviewCard taskDetails={taskDetails} taskURL={taskURL} />
            <Head title="Tasks" />
            <div className={classNames.container}>
                <TasksContent />
            </div>
        </Layout>
    );
};

// export const getServerSideProps = async () => {
//
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
