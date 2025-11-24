import React, { useEffect, useState } from "react";
import api from "../services/api";
import type { User } from "../types/types";
import styles from "./Account.module.css";

const Account: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    api.get("account/")
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.accountContainer}>
      <h2>Account Info</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Account;