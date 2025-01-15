import { useState } from "react";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [dynamicContent, setDynamicContent] = useState("");
  function handleClick(name) {
    setDynamicContent(name);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="example">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleClick("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("State")}>State</TabButton>
          </menu>
          {dynamicContent && <div>{dynamicContent}</div>}
        </section>
      </main>
    </div>
  );
}

export default App;
