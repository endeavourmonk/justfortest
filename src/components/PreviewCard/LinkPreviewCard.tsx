import Head from 'next/head';

const LinkPreviewCard = ({ taskDetails }: { taskDetails: any }) => {
    const { title, assignee, createdBy } = taskDetails || {};
    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content={title} />
                <meta
                    property="og:description"
                    content={`{purpose},\n\n assignee: ${assignee} - reporter: ${createdBy},\n\n `}
                />
                {/* <meta property="og:image" content={taskImage} />
                <meta property="og:url" content={taskURL} /> */}
                <meta property="og:type" content="website" />
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
