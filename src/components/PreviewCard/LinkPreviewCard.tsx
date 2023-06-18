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
        <title>rds</title>
        <meta property="og:title" content="My page title" />
        <meta property="og:description" content="Description of the page" />
      </Head>
    </div>
  );
};

export default LinkPreviewCard;

