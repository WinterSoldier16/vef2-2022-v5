import { useRouter } from "next/router";
import { Item } from "../../types";
import styles from "../../styles/event.module.css"
import { GetServerSideProps } from "next";


function EventPage ({ Item }: { Item: Item }) {
    const router = useRouter();

    return (
        <div>
            <h1>{Item.name}</h1>
            <p>{Item.description}</p>
            {Item.registrations.map((registration) => {
                return (
                  <div key={Item.id}>
                    <li className="registration_name">{registration.username}</li>
                    <p>{registration.comment}</p>
                  </div>
                )
            })}
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