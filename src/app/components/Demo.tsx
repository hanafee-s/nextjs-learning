"use client";

import React from "react";

const Demo = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <div>{value}</div>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Demo;
