import React from 'react';
import ReactDOM from 'React-dom';
// import App from './containers/App';
import Header from './components/Header/Header.jsx';

// const siteTitle = 'Basics To Improvisation';

const htmlContent = <Header />;

// const Layout = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="utf-8"/>
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
//         <title>${siteTitle}</title>
//         <style type="text/css">
//           ${styles}
//         </style>
//       </head>
//       <body>
//         <div id="content">${htmlContent}</div>
//       </body>
//     </html>
//   `;

ReactDOM.render(htmlContent, document.getElementById('app'));

module.hot.accept();
