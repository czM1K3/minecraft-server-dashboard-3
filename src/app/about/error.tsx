"use client";

import { NextPage } from "next";

const CustomError: NextPage = () => {
  return (
    <div className="center">
      <div className="animate__animated animate__jackInTheBox">
        <h1>Something went wrong</h1>
      </div>
    </div>
  );
};

export default CustomError;
