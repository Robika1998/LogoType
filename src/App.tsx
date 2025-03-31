import { useState } from "react";
import Header from "./pages/Header/Header";
import Posts from "./pages/Posts/Posts";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />
      <Posts searchTerm={searchTerm} />
    </div>
  );
}

export default App;
