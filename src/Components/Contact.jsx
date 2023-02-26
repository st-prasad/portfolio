import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    // e.preventDefault();

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID/pub key"
      );
      console.log("Email sent successfully!", response.status, response.text);
      console.log(e.target);
      console.log(form.current);
    } catch (error) {
      console.error("Error sending email:", error);
    }
    reset();
  };

  return (
    <section className="p-6 bg-[#74828c] flex items-center h-screen justify-between">
      <div className="w-[35vw] flex border justify-around items-start flex-col">
        <h1 className="cstmh2 font-georgia alig">Contact Me georg</h1>
        <div>
          <h1 className="cstmh4 font-helvetica font-light italic mt-28">
            Contact Me ital
          </h1>
          <h1 className="cstmh4 font-helvetica">Contact Me ital</h1>
        </div>
        {/* <h1 className='h'>details</h1> */}
        {/* <h1 className='animate-[wave_5s_ease-in-out_2]'>details</h1> */}
      </div>

      {/* form */}
      <form
        className="border top-3 container w-[50vw] p-8 rounded-md shadow dark:bg-gray-900 flex flex-col content-between"
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
      >
        {/* <form novalidate="" className="top-3 container w-[35vw] top max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid"> */}
        {/* <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2> */}
        <div className="namesDiv flex flex-row justify-center gap-[1vw]">
          <div className="fName w-full">
            <label className=" mb-1 ml-2">*f Name</label>
            {/* <label for="name" className="block mb-1 ml-2">Name</label> */}
            <input
              name="fName"
              type="text"
              placeholder="Your first name"
              className=" w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              {...register("fName", { required: "first name is required" })}
            />
          </div>

          <div className="lName w-full">
            <label className=" mb-1 ml-2">l Name</label>
            {/* <label for="name" className="block mb-1 ml-2">Name</label> */}
            <input
              name="lName"
              type="text"
              placeholder="Your last name"
              //   {...register("lName", { required: true })}
              className=" w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
            />
          </div>
        </div>

        {errors.fName && (
          <span className="nameError mx-0 cstmp1 text-amber-400">
            {errors.fName.message}
          </span>
        )}

        <div className="mailDiv">
          <label className=" mb-1 ml-2">*email</label>
          {/* <label for="name" className="block mb-1 ml-2">Name</label> */}
          <input
            name="email"
            type="text"
            placeholder="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email format",
              },
            })}
            className=" w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
          />
          {errors.email && (
            <span className="mailError mx-0 cstmp1 text-amber-400">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="mBox">
          <label className=" mb-1 ml-2">message</label>
          <textarea
            rows="4"
            cols="50"
            name="message"
            type="text"
            placeholder="enter message"
            className="w-full"
            {...register("messageBox", { required: "true", maxLength: 100 })}
          ></textarea>
          {errors.messageBox && errors.messageBox.type === "required" && (
          <span className="messageError mx-0 cstmp1 text-amber-400">
            this field is required
          </span>
        )}
          {errors.messageBox && errors.messageBox.type === "maxLength" && (
          <span className="messageError mx-0 cstmp1 text-amber-400">
            max leanth exeeded
          </span>
        )}
        </div>

        <div className="submitbtn submitDiv my-2 mx-auto float-left w-full">
          <input
            id="name"
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />

          {/* <input
            id="name"
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          /> */}
        </div>
      </form>
      {/* <form novalidate="" className="container w-[40vw] max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label for="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<label for="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Send</button>
		</div>
	</form> */}
    </section>
  );
};

export default Contact;
