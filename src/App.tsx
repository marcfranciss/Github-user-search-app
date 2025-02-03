import { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Tables from "./Tables";

function App() {
  const [query, setQuery] = useState("");
  const [seachOption, setSearchOption] = useState("firstName");

  // Filtering syntax
  // console.log(
  //   Users.filter((users) =>
  //     users.first_name.toLocaleLowerCase().includes(query)
  //   )
  // );
  const search = (data: any) => {
    const key =
      seachOption === "lastName"
        ? "last_name"
        : seachOption === "email"
        ? "email"
        : "first_name";
    return data.filter((name: any) =>
      name[key].toLocaleLowerCase().includes(query)
    );
  };
  return (
    <>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type='text'
        name=''
        id=''
        placeholder='Search...'
      />
      <select
        name='search-type'
        id='search-type'
        onChange={(e) => setSearchOption(e.target.value)}>
        <option value='firstName'>First Name</option>
        <option value='lastName'>Last Name</option>
        <option value='email'>Email</option>
      </select>
      <Tables data={search(Users)} />
      {/* <ol>
        {Users.filter((users) =>
          users.first_name.toLocaleLowerCase().includes(query)
        ).map((users) => {
          return <li key={users.id}>{users.first_name}</li>;
        })}
      </ol> */}
    </>
  );
}

export default App;
