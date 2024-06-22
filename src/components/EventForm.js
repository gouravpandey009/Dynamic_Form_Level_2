import React, { useState } from "react";

const EventForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [attendingWithGuest, setAttendingWithGuest] = useState(false);
  const [guestName, setGuestName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, age, attendingWithGuest, guestName };
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min="1"
        />
      </div>
      <div>
        <label>Are you attending with a guest? </label>
        <input
          type="checkbox"
          checked={attendingWithGuest}
          onChange={(e) => setAttendingWithGuest(e.target.checked)}
        />
      </div>
      {attendingWithGuest && (
        <div>
          <label>Guest Name: </label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
          />
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
