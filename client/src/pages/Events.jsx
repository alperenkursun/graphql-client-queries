import React from "react";
import Event from "../components/event/Event";

function Events() {
  return (
    <>
      <h1>Events</h1>
      <div className="events">
        <Event
          name="Event İpsum"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
          date="20.01.2050"
        />
      </div>
    </>
  );
}

export default Events;
