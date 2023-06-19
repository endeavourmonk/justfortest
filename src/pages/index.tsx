import { FC } from 'react';
import Head from '@/components/head';
import Layout from '@/components/Layout';
import classNames from '@/styles/tasks.module.scss';
import { TasksContent } from '@/components/tasks/TasksContent';
import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';

const Index = ({ details }: { details: any }) => {
    console.log('details: ', details);
    return (
        <Layout>
            <LinkPreviewCard details={details} />
            <Head title="Tasks" />

            <div className={classNames.container}>
                <TasksContent />
            </div>
        </Layout>
    );
};

export const getServerSideProps = async () => {
    async function fetchData() {
        const response = await fetch('https://api.realdevsquad.com/tasks');
        const data = await response.json();
        return data.task;
    }

    let result: any;

    fetchData()
        .then((data: any[]) => {
            result = data[0];
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    // console.log('data: ', result);
    // const details = {
    //     taskTitle: 'title of the task',
    //     taskStartDate: 'June 20, 2023',
    //     taskEndDate: 'June 25, 2023',
    //     taskDescription:
    //         'Implementing the link preview of the task with details: like assignee, reporter, start and end date of the task with little description',
    //     assignee: 'some random user',
    //     reporter: 'Ankush',
    //     taskImage: 'https://realdevsquad.com/img/Real-Dev-Squad@1x.png',
    //     taskURL: 'https://justfortest.vercel.app/',
    // };

    const details = {
        taskTitle: result.title,
        taskStartDate: result.startedOn,
        taskEndDate: result.endsOn,
        taskDescription: 'description of the task',
        assignee: result.assignee,
        reporter: result.createdBy,
        taskImage: 'https://realdevsquad.com/img/Real-Dev-Squad@1x.png',
        taskURL: 'https://justfortest.vercel.app/',
    };

    return { props: { details } };
};

export default Index;
