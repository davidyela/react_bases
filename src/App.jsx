import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  let [selectedContent, setSelectedContent] = useState();

  function handleClick(selectedButton) {
    // selectedButton => 'components' 'jsx' 'Props' 'State'
    setSelectedContent(selectedButton);
    console.log(selectedContent);
  }

  let tabContent = <p>Select topic</p>;
  if (selectedContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedContent].title}</h3>
        <p>{EXAMPLES[selectedContent].description}</p>
        <pre>
          <code>{EXAMPLES[selectedContent].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedContent === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedContent === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedContent === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedContent === "state"}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {/*Dynamic Content*/}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
