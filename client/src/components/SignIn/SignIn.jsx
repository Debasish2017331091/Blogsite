import React, { useState } from "react";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // You can perform your sign-in logic here using the email and password state values
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SIGN IN</h2>
      <form onSubmit={handleSignInSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          className={styles.inputField}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.inputField}
          onChange={handlePasswordChange}
        />
        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>
      </form>
      <p
        className={styles.forgetPassword}
        onClick={() => alert("Forget Password clicked")}
      >
        Do not have an account?
      </p>
    </div>
  );
}
