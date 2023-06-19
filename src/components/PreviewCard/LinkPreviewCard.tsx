import Head from 'next/head';

const LinkPreviewCard = () => {
    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content="task title goes here" />
                <meta
                    property="og:description"
                    content="the description for the task will be shown here one or two liner"
                />
                <meta
                    property="og:image"
                    content="https://realdevsquad.com/img/Real-Dev-Squad@1x.png"
                />
                <meta
                    property="og:url"
                    content="https://justfortest.vercel.app/"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:article:published_time"
                    content="{taskStartDate}"
                />
                <meta
                    property="og:article:expiration_time"
                    content="{taskEndDate}"
                />
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
