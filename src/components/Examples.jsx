// important => React Hook
// All these start with use
import { useState } from "react";
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";


export default function Examples() {

    const id = 'examples';
    const title = 'Examples';
    
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

        <Section id={id} title={title}>
            <menu>
                <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {tabContent}
        </Section>
    )
}