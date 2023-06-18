// import Head from 'next/head';

// const LinkPreviewCard = () => {
//     return (
//         <div>
//             <Head>
//                 <title>My page title</title>
//                 <meta property="og:title" content="My page title" />
//             </Head>
//             <Head>
//                 <meta property="og:title" content="My new title" />
//             </Head>
//         </div>
//     );
// };

// export default LinkPreviewCard;

import Head from 'next/head';

const LinkPreviewCard = () => {
    return (
        <div>
            <Head>
                <title>My Page Title</title>
                <meta property="og:title" content="My Page Title" />
                <meta
                    property="og:description"
                    content="Description of the page"
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
