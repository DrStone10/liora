import React, { useEffect, useState } from "react";
import api from "../services/api";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    api.get("home/")
      .then(res => setMessage(res.data.message))
      .catch(err => console.log(err));
  }, []);

  return <div className={styles.container}>{message}</div>;
};

export default Home;
