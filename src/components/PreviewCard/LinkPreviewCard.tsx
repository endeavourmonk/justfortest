import Head from 'next/head';

const LinkPreviewCard = ({ details }: { details: any }) => {
    const {
        taskTitle,
        taskStartDate,
        taskEndDate,
        taskDescription,
        assignee,
        reporter,
        taskImage,
        taskURL,
    } = details;

    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content={taskTitle} />
                <meta
                    property="og:description"
                    content={`${taskDescription},\n\n assignee: ${assignee} - reporter: ${reporter},\n\n startedOn: ${taskStartDate} - endsOn: ${taskEndDate}`}
                />
                <meta property="og:image" content={taskImage} />
                <meta property="og:url" content={taskURL} />
                <meta property="og:type" content="website" />
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
