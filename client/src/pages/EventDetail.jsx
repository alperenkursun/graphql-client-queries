import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_EVENT_BY_ID } from "../graphql/queries";

function EventDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_EVENT_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const event = data.event;

  return (
    <div className="events">
      <h1 className="event-detail-title">{event.title}</h1>

      <h4 className="event-info">
        Event Date: <span>{event.date}</span>
      </h4>

      <h4 className="event-info">
        Event Owner: <span>{event.user.username}</span>
      </h4>

      <h4 className="event-info">
        Event Location: <span>{event.location.name}</span>
      </h4>

      <p>{event.desc}</p>

      <h4 className="event-info">Participants</h4>
      <ul>
        {event.participants.map((p, i) => (
          <li key={i}>{p.user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventDetail;
