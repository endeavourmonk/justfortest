import Head from 'next/head';

// const LinkPreviewCard = () => {
//     return (
//         <div>
//             <Head>
//                 <title>status site</title>
//                 <meta property="og:title" content="task title goes here" />
//                 <meta
//                     property="og:description"
//                     content="the description for the task will be shown here one or two liner"
//                 />
//                 <meta
//                     property="og:image"
//                     content="https://realdevsquad.com/img/Real-Dev-Squad@1x.png"
//                 />
//                 <meta
//                     property="og:url"
//                     content="https://justfortest.vercel.app/"
//                 />
//                 <meta property="og:type" content="website" />
//                 <meta
//                     property="og:article:published_time"
//                     content="{taskStartDate}"
//                 />
//                 <meta
//                     property="og:article:expiration_time"
//                     content="{taskEndDate}"
//                 />
//             </Head>
//         </div>
//     );
// };

const LinkPreviewCard = () => {
    const taskTitle = 'Task Title';
    const taskStartDate = 'June 20, 2023';
    const taskEndDate = 'June 25, 2023';
    const taskDescription = `Task duration: ${taskStartDate} - ${taskEndDate}`;

    const taskImage = 'https://realdevsquad.com/img/Real-Dev-Squad@1x.png';
    const taskURL = 'https://justfortest.vercel.app/';

    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content={taskTitle} />
                <meta property="og:description" content={taskDescription} />
                <meta property="og:image" content={taskImage} />
                <meta property="og:url" content={taskURL} />
                <meta property="og:type" content="website" />
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
