import { FC } from 'react';
import Head from '@/components/head';
import Layout from '@/components/Layout';
import classNames from '@/styles/tasks.module.scss';
import { TasksContent } from '@/components/tasks/TasksContent';
import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';

const Index = () => {
    return (
        <Layout>
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
