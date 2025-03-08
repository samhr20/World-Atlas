import React , {useState} from 'react';

const Contact = () => {

   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [msg, setMsg] = useState('')

   const submitHandler = (e) =>{
       e.preventDefault();
      
       setUsername('')
       setEmail('')
       setMsg('')
   }

  return (
    <div className="dark:bg-black dark:text-white bg-[#F8F9FA] flex justify-center pt-12 pb-14 px-5">
      <div className=" bg-gray-200 max-w-[600px] w-full dark:bg-[#202020] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-5 text-center">Contact Us</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 dark:bg-black border border-gray-600 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 dark:bg-black border border-gray-600 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 dark:bg-black border border-gray-600 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={msg}
            onChange={(e)=>setMsg(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            onClick={submitHandler}
            className="py-2 px-5 flex justify-center items-center text-white  gap-2.5 bg-[#202020] border rounded-full cursor-pointer hover:bg-black"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
