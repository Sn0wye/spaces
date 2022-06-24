import React from "react";
import spacesImg from "../assets/icons/SpacesLogo.svg";

export function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-brand to-[#5C4BC5] flex flex-col items-center">
        <main className="flex flex-col items-center mt-48">
          <h1 className="font-bold text-9xl text-white">Spaces</h1>
          <img
            src={spacesImg}
            alt="Spaces logo Image"
            className="max-w-56 relative -top-20 z-20"
          />
        </main>
        <p className="text-white text-center text-2xl">
          <b>Simple</b>, <b>clean</b> and <b>fast</b> to get your
          <br />
          <u>tasks done</u> best.
        </p>
        <button className="mt-12 py-6 px-12 border-2 border-white bg-transparent text-white rounded-lg">
          GET STARTED
        </button>
      </div>
    </>
  );
}
