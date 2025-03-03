import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white flex justify-center pt-12 pb-14 px-5">
      <div className="max-w-[600px] w-full bg-[#202020] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-5 text-center">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
          <button
            type="submit"
            className="py-2 px-5 flex justify-center items-center gap-2.5 bg-[#202020] border rounded-full cursor-pointer hover:bg-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
