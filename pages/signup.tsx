import Head from "next/head";
import { User } from "../types";
import styles from "../styles/login.module.css"


export default function SignupPage() {
  return (
    <div className={styles.container}>
      <Head>
        <h1>Nýskráning</h1>
        <form className={styles.form} method="post" action="/api/signup">
          <label>Nafn:</label>
          <input id="name" name="name" type="text"></input>
          <label>Notandanafn:</label>
          <input id="username" name="username" type="text"></input>
          <label>Netfang:</label>
          <input id="email" name="email" type="email"></input>
          <label>Lykilorð</label>
          <input id="password" name="password" type="password"></input>
          <input id="signup" name="signup" type="submit" value="Skrá"></input>
        </form>
      </Head>
    </div>
    
  );
}


