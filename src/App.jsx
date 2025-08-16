
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
 
// Components
import { Header } from './components/Header/Header.jsx'; // No tiene el default 
import { CoreConcept } from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {

  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }  

  return (
    <div>
      <Header></Header>
      <main>

        <section id='core-concepts'>
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('component')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        <h1>
          Dynamic text
        </h1>
      </main>
    </div>
  );
}

export default App;
