import { FC } from 'react';
import Head from '@/components/head';
import Layout from '@/components/Layout';
import classNames from '@/styles/tasks.module.scss';
import { TasksContent } from '@/components/tasks/TasksContent';
import LinkPreviewCard from '@/components/PreviewCard/LinkPreviewCard';
import fetch from '@/helperFunctions/fetch';
import { useRouter } from 'next/router';
import { TASKS_URL } from '@/constants/url';

let TASK_DETAILS_URL: any;

const Index = ({ details }: { details: any }) => {
    const router = useRouter();
    const id = router.query?.id as string;
    TASK_DETAILS_URL = `${TASKS_URL}/${id}/details`;

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
    // const TASKS_URL1 = 'https://staging-api.realdevsquad.com/tasks';
    // const taskId = 'y0ZOydQp5zLQdbyR3g65';

    const { requestPromise } = fetch({
        url: `${TASK_DETAILS_URL}`,
    });

    const res = await requestPromise;
    const result = await res.tasks[0];

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
