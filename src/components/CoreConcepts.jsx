import { CORE_CONCEPTS } from '../data.js'
import { CoreConcept } from './CoreConcept.jsx'
import Section from './Section.jsx'

export default function CoreConcepts() {

    const id = 'core-concepts';
    const title = 'Time to get started!';

    return (
        
        <Section id={id} title={title}>
            <ul>
                {CORE_CONCEPTS.map((item, k) => <CoreConcept key={k} {...item}/>)}
            </ul>
        </Section>

    )
}