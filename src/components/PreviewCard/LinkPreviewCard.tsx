import Head from 'next/head';

// async function fetchData() {
//     const response = await fetch('https://api.realdevsquad.com/tasks');
//     return await response.json();
// }

const LinkPreviewCard = () => {
    // const data = fetchData();
    // const taskTitle = data.title;

    // fetchData.then((data) => {taskTitle = data.title;});

    const taskTitle = 'title of the task';
    const taskStartDate = 'June 20, 2023';
    const taskEndDate = 'June 25, 2023';
    const taskDescription =
        'Implementing the link preview of the task with details: like assignee, reporter, start and end date of the task with little description';
    const assignee = 'some random user';
    const reporter = 'Ankush';

    const taskImage = 'https://realdevsquad.com/img/Real-Dev-Squad@1x.png';
    const taskURL = 'https://justfortest.vercel.app/';

    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content={taskTitle} />
                <meta
                    property="og:description"
                    content={`${taskDescription},\n startedOn: ${taskStartDate} - endsOn: ${taskEndDate}, assignee: ${assignee} - reporter: ${reporter}`}
                />
                <meta property="og:image" content={taskImage} />
                <meta property="og:url" content={taskURL} />
                <meta property="og:type" content="website" />
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
