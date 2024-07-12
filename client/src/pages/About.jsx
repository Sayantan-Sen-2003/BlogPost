import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About BlogPost
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to BlogPost! This project was created by Abhrajit Das and
              Sayantan Sen.
            </p>

            <p>
              We are Building a blog with the MERN stack is a cool project that combines
              MongoDB, Express.js, React.js, and Node.js.
            </p>

            <p>
              With MongoDB, you can store all your blog posts and user data easily. Express.js
              handles the backend, making it simple to manage routes and server-side logic. React.js
              takes care of the frontend, giving you a smooth, dynamic user interface to create, edit
              and display your blog posts. Node.js ties it all together, running JavaScript on the server.
              This stack is great for creating a fast, scalable, and interactive blog platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

