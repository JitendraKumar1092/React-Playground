import { Component, useState } from "react";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data/data";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const [dynamicContent, setDynamicContent] = useState(EXAMPLES["components"]);
  function handleClick(name) {
    setDynamicContent(EXAMPLES[name]);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton
              isSelected={dynamicContent.title === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={dynamicContent.title === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={dynamicContent.title === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={dynamicContent.title === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {dynamicContent ? (
            <div id="tab-content">
              <h3>{dynamicContent.title}</h3>
              <p>{dynamicContent.description} </p>
              <pre>
                <code>{dynamicContent.code}</code>
              </pre>
            </div>
          ) : (
            <div id="tab-content">Please click a button</div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
