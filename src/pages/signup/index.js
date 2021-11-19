import React from "react";

function SignUp() {
  const clickHandler = () => {
    localStorage.setItem("token", "123");
  };

  return (
    <div>
      First Access
      <button onClick={clickHandler}>Set token</button>
    </div>
  );
}

export default SignUp;
