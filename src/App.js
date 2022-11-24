import React from "react";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      {/* NavBar */}
      <NavBar />
      {/* Search */}
      <Search />
      {/* Contacts */}
      <Contacts />
    </div>
  );
};

export default App;
