import Head from 'next/head';

const LinkPreviewCard = ({ details }: { details: any }) => {
    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content={details.title} />
                <meta
                    property="og:description"
                    content={`${details.purpose},\n\n assignee: ${details.assignee} - reporter: ${details.createdBy},\n\n `}
                />
                {/* <meta property="og:image" content={taskImage} />
                <meta property="og:url" content={taskURL} /> */}
                <meta property="og:type" content="website" />
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
