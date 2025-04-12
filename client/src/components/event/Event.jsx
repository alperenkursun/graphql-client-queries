import "./Event.css";

function Event({ name, desc, date }) {
  return (
    <div className="event">
      <div className="event-top">
        <span className="event-name">{name}</span>
        <span className="event-date">{date}</span>
      </div>
      <p className="event-desc">{desc}</p>
      <div className="event-bottom">
        <a className="event-details" href="#">
          Details
        </a>
      </div>
    </div>
  );
}

export default Event;
