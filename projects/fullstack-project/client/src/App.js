import React from 'react';
import AddForm from "./form/AddForm";
import List from "./form/List";
import Header from "./Header"
import "./styles.css"
const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <AddForm />
      <List />
    </div>
  )
}

export default App;
