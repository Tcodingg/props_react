import React from "react";
import "./App.css";
import Card from "./Card";
import contacts from "./Contacts";

const createCard = (contacts) => {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.img}
      phone={contacts.phone}
      email={contacts.email}
    />
  );
};

function App() {
  return (
    <div>
      <h1>This are list of contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
