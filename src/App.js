import "./App.css";
import contactsData from "./contacts.json";
import React, { useState } from "react";

const contacts = [
  contactsData[0],
  contactsData[1],
  contactsData[2],
  contactsData[3],
  contactsData[5],
];

function App() {
  const [items, setItems] = useState(contacts);

  const getRandomContact = () => {
    let randomContact =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    console.log(randomContact);
    let newContact = [...items];
    newContact.push(randomContact);
    console.log(newContact);
    setItems(newContact);
  };

  // const getRandomContact = () => {
  //   const randomContact =
  //     contactsData[Math.floor(Math.random() * contactsData.length)];
  //   // console.log(randomContact);
  //   // const newContact = [...items];
  //   // newContact.push(randomContact);
  //   // console.log(newContact);
  //   setItems([...items, randomContact]);
  // };

  // const getRandomContact = () => {
  //   const newItem = contacts.push(randomContact);
  //   console.log(newItem);
  //   setItems(newItem);
  // };

  // const sortByPopularity = () => {
  //   const sortedItems = contacts.sort((a, b) => {
  //     return b.popularity - a.popularity;
  //   });

  //   setItems(sortedItems);

  //   const toggleMenu = () => {
  //     setItems(!sortedItems);
  //   };
  // };

  const sortByPopularity = () => {
    const sortedItems = contacts.sort((a, b) => {
      return b.popularity - a.popularity;
    });

    setItems([...items, sortedItems]);
  };

  // const getSortedItems = () => {
  //   const copy = [...items];
  //   if (sortMode === "popularity") {
  //     copy.sort((a, b) => {
  //       return b.popularity - a.popularity;
  //     });
  //   }
  //   return copy;
  // };

  const sortByName = () => {
    const sortedItems = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    setItems([...items, sortedItems]);
  };

  const deleteContact = (item, index) => {
    const filteredItems = items.filter((x) => x !== item);
    const copy = [...items];
    copy.splice(index, 1);
    setItems(filteredItems);
    setItems(copy);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => getRandomContact()}>Add Random Contact</button>

      <button onClick={() => sortByPopularity()}>Sort by popularity</button>

      <button onClick={() => sortByName()}>Sort by name</button>

      <table>
        <colgroup span="4" className="columns">
          IronContacts
        </colgroup>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Action</th>
        </tr>
        {/* {getSortedItems().map((item, i) => ( */}
        {items.map((item, i) => (
          <tr key={i}>
            <td>
              <img src={item.pictureUrl} className="picture" alt="picture" />
            </td>
            <td>{item.name}</td>
            <td>{item.popularity}</td>
            <td>{item.wonOscar && <p>🏆</p>}</td>
            <td>{item.wonEmmy && <p>🏆</p>}</td>
            <td>
              <button
                onClick={() => deleteContact(item)}
                className="btn-delete"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
