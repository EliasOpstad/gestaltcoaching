import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="flex w-full">
      <div className="basis-1/2 mx-auto h-[800px]">
        <Image
          src="/images/test.jpg"
          alt="Home Background"
          height={500}
          width={500}
          className="inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="basis-1/2 mx-auto mt-10 h-[500px] ml-10 mr-10">
        <h1 className="text-2xl font-bold">Kontakt oss</h1>
        <form>
          <input
            type="text"
            placeholder="Navn"
            className="border p-2 mb-4 w-full"
          />
          <input
            type="email"
            placeholder="E-post"
            className="border p-2 mb-4 w-full"
          />
          <textarea
            placeholder="Melding"
            className="border p-2 mb-4 w-full"
            rows={4}
          />
          <button type="submit" className="bg-blue-500 text-white p-2">
            Send melding
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
