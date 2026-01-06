import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <InfoCard />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
