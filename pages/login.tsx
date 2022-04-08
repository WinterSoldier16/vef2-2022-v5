import Head from "next/head";
import { User } from "../types";
import styles from "../styles/login.module.css"


export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <h1>Innskráning</h1>
        <form className={styles.form} method="post" action="/api/signup">
          <label>Notandanafn:</label>
          <input id="username" name="username" type="text"></input>
          <label>Lykilorð</label>
          <input id="password" name="password" type="password"></input>
          <input id="signup" name="signup" type="submit" value="Innskrá"></input>
        </form>
      </Head>
    </div>
    
  );
}