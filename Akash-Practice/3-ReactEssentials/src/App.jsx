import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data-with-examples.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  let tabContent = "Please select a Topic";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
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
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              OnSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
              OnSelect={() => {
                handleSelect("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
              OnSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
              OnSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
