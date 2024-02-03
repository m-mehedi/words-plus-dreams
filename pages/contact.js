import React from 'react'

const Contact = () => {
  return (
    
  <div className="flex min-h-screen items-center justify-start bg-white dark:bg-gray-900">
  <div className="mx-auto w-full max-w-lg">
    <h1 className="text-3xl font-medium dark:text-green-400 ">Contact us</h1>
    {/* <p className="mt-3 dark:text-green-200">Email me at <span className='italic text-green-500 dark:text-blue-100'>nv.nandanvyas@gmail.com</span> or message here:</p> */}
    <p className="mt-3 dark:text-green-200">Feel free to contact me anytime. I may not respond right away if I’m in the middle of a project but, like many authors I know, I look for excuses to procrastinate.</p>

    <form action="https://api.web3forms.com/submit" method='POST' className="mt-10">
    <input type="hidden" name="access_key" value="66619689-10ee-4b96-97ac-c6defa916d61" />
      <div className="grid gap-6 sm:grid-cols-2">
      <div className="relative z-0">
          <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-green-300 focus:border-green-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600 peer-focus:dark:text-green-500">Your name</label>
        </div>
        <div className="relative z-0">
          <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-green-300 focus:border-green-600 focus:outline-none focus:ring-0" placeholder=" " />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600 peer-focus:dark:text-green-500">Your email</label>
        </div>
        <div className="relative z-0 col-span-2">
          <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-green-300 focus:border-green-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-green-600 peer-focus:dark:text-green-500">Your message</label>
        </div>
      </div>
      <button type="submit" className='flex mr-4 mt-5 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg'>Send Message</button>
    </form>
  </div>
</div>
  
  )
}

export default Contact