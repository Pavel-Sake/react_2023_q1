import React from "react";

type MyProps = {
  name: string;
};

function Button({ name }: MyProps) {
  return (
    <>
      <button type="submit">{name} </button>
    </>
  );
}

export { Button };
