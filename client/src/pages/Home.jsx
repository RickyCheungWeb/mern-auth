import React from 'react';

function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text3xl font-bold mb-4 text-size-slate-700'>
        Welcome to Ricky's Auth App!
      </h1>
      <p className='mb-4 text-slate-700'>
        This web application is developed using the MERN (MongoDB, Express,
        React, Node.js) stack. It incorporates authentication functionalities
        enabling users to register, authenticate, and logout. Additionally, it
        grants access to restricted routes exclusively to authenticated users.
      </p>
      <p className='mb-4 text-slate-700'>
        The application's front-end is constructed with React, utilizing React
        Router for client-side routing. The back-end is developed with Node.js
        and Express, utilizing MongoDB as the database. Authentication is
        implemented through the use of JSON Web Tokens (JWT).
      </p>
      <p className='mb-4 text-slate-700'>
        This application is designed as a starting point for my personal journey
        in learning to build full-stack web applications with authentication
        using the MERN stack. I am enthusiastic about beginning my career as a
        front-end or full-stack developer. Feel free to contact me at 0420 883
        450 or via email at rickycreate@gmail.com.
      </p>
    </div>
  );
}

export default Home;
