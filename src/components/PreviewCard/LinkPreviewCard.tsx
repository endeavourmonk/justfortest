import Head from 'next/head';
import { taskDetailsDataType } from '@/interfaces/taskDetails.type';

const LinkPreviewCard = ({ taskDetails }: { taskDetails: any }) => {
    // const { title, assignee, createdBy } = taskDetails;
    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content={taskDetails?.title} />
                <meta
                    property="og:description"
                    content={`{purpose},\n\n assignee: ${taskDetails?.assignee} - reporter: ${taskDetails?.createdBy},\n\n `}
                />
                {/* <meta property="og:image" content={taskImage} />
                <meta property="og:url" content={taskURL} /> */}
                <meta property="og:type" content="website" />
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
