
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
 
// Components
import Header from './components/Header/Header.jsx'; // No tiene el default 
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>
      <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
