import React from "react";

const Header = () => {
  return (
    <div className=" text-2xl flex justify-between sticky items-center p-4 text-white top-0 left-0 right-0 z-50 h-[100px] border-b border-white">
      <h1>
        <a href="/">Gestaltcoach Cathrine Gåre Opstad</a>
      </h1>

      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="/">Hjem</a>
          </li>
          <li>
            <a href="/bestillTime">Bestill Time</a>
          </li>
          <li>
            <a href="/kontakt">Kontakt</a>
          </li>
          <li>
            <a href="/priser">Priser</a>
          </li>
          <li>
            <a href="/om">Om Meg</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
