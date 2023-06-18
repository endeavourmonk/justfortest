import Head from 'next/head';

const LinkPreviewCard = () => {
    return (
        <div>
            <Head>
                <title>status site</title>
                <meta property="og:title" content="task title goes here" />
                <meta
                    property="og:description"
                    content="This is description for the status site of real dev squad"
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
            </Head>
        </div>
    );
};

export default LinkPreviewCard;
