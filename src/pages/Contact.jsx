import React, { useState } from 'react';
import { databases, ID } from '../appwrite/config';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [loader, setLoader] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [error, setError] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    if (username.trim() === '' || email.trim() === '' || msg.trim() === '') {
      setError('All fields are required.');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }

    try {
      setLoader(true);
      await databases.createDocument(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID,
        ID.unique(),
        {
          username,
          email,
          msg,
        }
      );

      setUsername('');
      setEmail('');
      setMsg('');
      setMsgSent(true);
    } catch (error) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoader(false);
      setTimeout(() => {
        setMsgSent(false);
        setError('');
      }, 2000);
    }
  };

  return (
    <div className="dark:bg-black dark:text-white bg-[#F8F9FA] flex justify-center pt-12 pb-14 px-5">
      <div className="bg-gray-200 max-w-[600px] w-full dark:bg-[#202020] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-5 text-center">Contact Us</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 dark:bg-black border border-gray-600 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 dark:bg-black border border-gray-600 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 dark:bg-black border border-gray-600 rounded-md dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
          ></textarea>

          {msgSent && (
            <div className="w-full text-center bg-green-500 p-3 rounded-lg font-bold">
              Message Sent!
            </div>
          )}
          {error && (
            <div className="w-full text-center bg-red-500 p-3 rounded-lg font-bold">
              {error}
            </div>
          )}

          <button
            type="submit"
            onClick={submitHandler}
            disabled={loader}
            className="py-2 px-5 flex justify-center items-center text-white gap-2.5 bg-[#202020] border rounded-full cursor-pointer hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loader ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;