import { useRouter } from "next/router";
import { Item } from "../../types";
import styles from "../../styles/event.module.css"
import { GetServerSideProps } from "next";
import Footer from "../components/footer";


function EventPage ({ Item }: { Item: Item }) {
  const router = useRouter();

  return (
      <div className={styles.container}>
          <h1>{Item.name}</h1>
          <h3 className={styles.h2}>{Item.description}</h3>
          <h3 className={styles.h2}>Skráningar</h3>
          {Item.registrations.map((registration) => {
              return (
                <div key={Item.id}>
                  <li className={styles.name}>{registration.name}</li>
                  <p>{registration.comment}</p>
                </div>
              )
          })}
          <Footer />
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://vef2-20222-v3-synilausn.herokuapp.com/events/${context.query.id}`);
  const { id, name, description, registrations } : Item = await res.json();

  return {
      props: {
          Item: {
              id: id,
              name: name,
              description: description,
              registrations: registrations,
          }
      },
  };
};

export default EventPage;