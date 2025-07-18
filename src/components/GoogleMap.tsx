import React from "react";

const GoogleMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.7224143386566!2d10.710119177181676!3d59.91626746390157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd33f7f5f93%3A0xf1e92962d7ccb80d!2zQnlnZMO4eSBhbGzDqSAyMSwgMDI2MiBPc2xv!5e1!3m2!1sno!2sno!4v1752832172111!5m2!1sno!2sno"
      width="100%"
      height="600"
      className="rounded-lg mx-auto"
      loading="lazy"
    ></iframe>
  );
};

export default GoogleMap;
