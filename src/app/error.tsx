"use client";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <h1>500</h1>
      <h2>Error</h2>
      <Link href={"/"}>Reload</Link>
    </div>
  );
};

export default Error;
