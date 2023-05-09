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
      const response = await emailjs.sendForm(
        "service_93tactb",
        "template_ez54ak9",
        form.current,
        "OJEat3txWvOC0nOVI"
      );
      alert(
        `Email sent successfully! Status: ${response.status}, Text: ${response.text}`
      );

      console.log(form.current);
    } catch (error) {
      alert("Error sending email:", error);
    }
    reset();
  };

  return (
    <section className="p-6 bg-[#74828c] flex items-center h-screen justify-around" id="contact">
      <div className="w-[35vw] flex justify-around items-start flex-col">
        <h1 className="cstmh2 font-helvetica font-extralight italic">Get in touch with me</h1>

      </div>

      {/* form */}
      <form
        className="formClass font-georgia border top-3 container w-[50vw] p-8 rounded-md shadow dark:bg-gray-900 flex flex-col content-between"
        onSubmit={handleSubmit(onSubmit)}
        ref={form}
      >
        <div className="namesDiv flex flex-row justify-center gap-[1vw]">
          <div className="fName w-full">
            <label className="mb-1 ml-2">*first Name</label>

            <input
              name="fName"
              type="text"
              placeholder="Your first name"
              className=" w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
              {...register("fName", { required: "first name is required" })}
            />
          </div>

          <div className="lName w-full">
            <label className=" mb-1 ml-2">last Name</label>

            <input
              name="lName"
              type="text"
              placeholder="Your last name"
              {...register("lName")}
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
            {...register("messageBox", { required: true, maxLength: 100 })}
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
            className="font-georgia font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />

        </div>
      </form>
      
    </section>
  );
};

export default Contact;
