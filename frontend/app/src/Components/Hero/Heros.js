import React from "react";

export default function Heros() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full px-[7rem] pt-3 mb-2">
        <img
          src="https://yt3.googleusercontent.com/UqT_vCkJIn1P2fH1pchr6lbe3xeEekY61h4bUpJkVuityqKOEtUYcNy3pLiJ5OKdj4uKA81FWE8=s900-c-k-c0x00ffffff-no-rj"
          className="w-28 h-20 object-contain"
          alt="LOGO"
          srcset=""
        />
        <button
          type="button"
          className="bg-black text-white px-5 py-2 hover:bg-gray-300 hover:text-black rounded-full "
          onClick={() =>
            window.open("https://github.com/Aman0246/Ai-Summarizer.git")
          }
        >
          Github
        </button>
      </nav>
      <h1 className=" flex flex-col justify-center items-center text-center text-5xl font-[900]">
          Summeriz Article with
        <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          OpenAI GPT
        </span>

      </h1>
         <h2 className=" pt-2 flex flex-col justify-center font-[500] text-gray-500 text-center text-2xl">
          Summarize your article with OpenAI GPT-3 
          Simplify your reading <br />with summerizer ,an open-source article summarizer that transform lengthy <br />article into clear and concise summaries <span>_</span>
         </h2>

    </header>
  );
}
