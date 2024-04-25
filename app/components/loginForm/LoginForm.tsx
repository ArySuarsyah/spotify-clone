"use client";

import React from "react";

const LoginForm = () => {
  return (
    <form className="w-[45rem] grid justify-center text-white gap-5">
      <div className="grid gap-2 w-80">
        <label htmlFor="email">Email or username</label>
        <input
          className="outline-none input input-bordered bg-primary p-2 border-[1px] border-slate-600 rounded-sm focus:outline-none hover:border-white focus:border-2"
          type="text"
          name="emai"
          id="email"
          placeholder="Email or username"
        />
      </div>
      <div className="grid gap-2 w-80">
        <label htmlFor="password">Password</label>
        <input
          className="outline-none input input-bordered bg-primary p-2 border-[1px] border-slate-600 rounded-sm focus:outline-none hover:border-white focus:border-2"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div>
        <input
          type="checkbox"
          className="toggle toggle-success border-[1px] border-white [--tglbg:#1ED760]"
        />
      </div>
      <button
        onClick={() => console.log("ok")}
        type="button"
        className="p-3 outline outline-transparent bg-[#1ED760] rounded-full text-black font-bold hover:scale-[1.07] hover:bg-[#1ED760] active:scale-[.9] duration-300"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
