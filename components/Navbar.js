import Image from "next/image";
import React from "react";


export default function IndexPage() {

    return (
        <div className="text-white">
            <nav className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
  <div className="mb-2 sm:mb-0">
    <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark ml-10 flow-root">
        <Image src="/logo.png" width="38.51px" height="38.51px" className="float-left"/>
        <h1 className="float-right ml-2 mt-1">Gullak.party</h1>
    </a>
  </div>
  <div>
    <a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
        Create your own DAO
    </a>
    <a href="/two" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
        Connect wallet
    </a>
  </div>
</nav>
        </div>
    );
}
