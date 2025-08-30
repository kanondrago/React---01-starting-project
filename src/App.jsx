
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

// important => React Hook
// All these start with use
import { useState, Fragment } from 'react';
 
// Components
import { Header } from './components/Header/Header.jsx'; // No tiene el default 
import { CoreConcept } from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {

  // You must call it at the must level of the component function
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <>
      <Header></Header>
      <main>

        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((item, k) => <CoreConcept key={k} {...item}/>)}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
