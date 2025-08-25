import Link from "next/link";
import React from "react";
import "../styles/globals.css";

const Header = () => {
  return (
    <div className=" text-2xl flex justify-between sticky items-center p-4 top-0 left-0 right-0 z-50 h-[100px] bg-[#b7c2bc] border-b border-white">
      <h1>
        <Link href="/">Gestaltcoach Cathrine Gåre Opstad</Link>
      </h1>

      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">Hjem</Link>
          </li>
          <li>
            <Link href="/bestillTime">Bestill Time</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>

          <li>
            <Link href="/om">Om Meg</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
