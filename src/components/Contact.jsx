import  { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [popupContent, setPopupContent] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    };
    try {
      await axios.post('https://getform.io/f/pamqwpna', userInfo);
      setPopupContent("Your message has been sent successfully!");
    } catch (error) {
      console.log(error);
      setPopupContent("Failed to send the message. Please try again.");
    }
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#22d3ee' }}>Contact me</h1>
        <span style={{ color: "#ff007f" }}>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="w-96 px-8 py-6 rounded-xl border-[2px]">
            <h1 className="text-xl font-semibold mb-4" style={{ color: "#ff007f" }}>Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                style={{ color: "#ff007f" }}
                className="shadow rounded-lg appearance-none border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                style={{ color: "#ff007f" }}
                className="shadow rounded-lg appearance-none border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block">Message</label>
              <textarea
                name="message"
                placeholder="Message me"
                style={{ color: "#ff007f" }}
                className="shadow rounded-lg appearance-none border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                rows="5"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>

            <button type="submit" style={{ backgroundColor: '#22d3ee' }} className="rounded-xl px-3 py-2 text-white">
              Send
            </button>
          </form>
        </div>
      </div>

      {popupContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Success</h2>
            <p>{popupContent}</p>
            <button onClick={closePopup} className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
