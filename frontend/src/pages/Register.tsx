import React, { useState } from "react";
import api from "../services/api";
import type { AuthForm } from "../types/types";
import styles from "./Register.module.css";

const Register: React.FC = () => {
  const [form, setForm] = useState<AuthForm>({ username: "", email: "", password: "" });
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post("register/", form)
      .then(res => setMessage(res.data.message))
      .catch(err => setMessage(err.response.data.error));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default Register;
