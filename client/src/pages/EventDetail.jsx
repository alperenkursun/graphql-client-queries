import React from "react";

function EventDetail() {
  return (
    <div className="events">
      <h1 className="event-detail-title">Event Detail</h1>
      <h4>
        Event Date: <span>20.10.2050</span>
      </h4>
      <h4>
        Event Owner: <span>Event Owner</span>
      </h4>
      <h4>
        Event Location: <span>LA</span>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h4>Participants</h4>
      <ul>
        <li>Olivia Smith</li>
        <li>Ethan Williams</li>
        <li>Sophia Brown</li>
        <li>Noah Jones</li>
        <li>Isabella Garcia</li>
        <li>Liam Miller</li>
        <li>Mia Davis</li>
        <li>Oliver Wilson</li>
        <li>Amelia Martinez</li>
        <li>Elijah Anderson</li>
      </ul>
    </div>
  );
}

export default EventDetail;
