import { Button } from './buttons';

export const Paragraphe = props => <p>
    <Button onClickHandler={props.onClickHandler}>
        ❤️&nbsp;&nbsp;{props.text}
    </Button>
</p>;