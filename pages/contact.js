import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">

      <div className='dark:bg-gray-900 dark:text-gray-100 p-12 pb-20 md:pb-14 md:p-24 lg:p-24 text-justify'>
        <div className='text-4xl text-center font-black dark:text-green-500 pb-8 '>Contact us</div>

        {/* Image and content stack on top of each other on small devices */}
        <div className="w-full md:flex">
          {/* Right two-thirds for the content on large devices */}
          <div className="w-full md:w-1/2 mx-auto max-w-lg p-8">
            <h2 className="text-2xl font-medium dark:text-green-400">Send me your feedback</h2>
            <p className="mt-3 dark:text-green-200">
              Feel free to contact me anytime. I may not respond right away if I’m in the middle of a project, but, like many authors I know, I look for excuses to procrastinate.
            </p>
            <p className="mt-3 dark:text-green-200">
              You can contact me or send your feedback by{' '}
              <a href="mailto:miles@mpb.me" className="text-green-500 underline">
                clicking
              </a>
              &nbsp; the button below.
            </p>
            <button
              type="submit"
              onClick={() => {
                window.location.href = 'mailto:miles@mpb.me';
              }}
              className="flex mr-4 mt-5 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Us
            </button>
          </div>

          {/* Left third for the image on large devices, aligned to the right */}
          <div className="w-full md:w-1/2 p-15 md:order-first">
            <img
              src="https://i.postimg.cc/mg9bbWNw/contact.png"
              alt="Contact us"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
