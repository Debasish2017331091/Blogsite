// SignUp.jsx
import React, { useState } from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    console.log(name, value);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
    // You can perform your signup logic here
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>SIGN UP</h2>
      <form onSubmit={handleSignUpSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.inputField}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.inputField}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={styles.inputField}
          onChange={handleChange}
        />
        <button type="submit" className={styles.signUpButton}>
          Sign Up
        </button>
      </form>
      <p
        className={styles.forgetPassword}
        onClick={() => alert("Forget Password clicked")}
      >
        Already have an account?
      </p>
    </div>
  );
}
