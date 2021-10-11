import { useState } from 'react';
import { Paragraphe } from '../Paragraphe';
import { ParagrapheClass } from '../ParagrapheClass';

export const Home = props => {
    const [count, setCount] = useState(0);
    const onClickHandler = () => {
        setCount(count + 1);
    }
    return <div className="container">
        <header className="App-header">
            <h1>{props.text}</h1>
            <Paragraphe  {...props} onClickHandler={onClickHandler} />
            <ParagrapheClass />
            {count}
        </header>
    </div>
};