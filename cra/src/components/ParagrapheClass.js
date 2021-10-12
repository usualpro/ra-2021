import { Component } from "react";
import { ButtonRegularOutline } from './buttons';

export class ParagrapheClass extends Component {
    constructor() {
        super();
        console.log("constructor");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    render() {
        console.log("render");
        return <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum harum dolor, ea molestias vitae aspernatur rerum, earum optio expedita incidunt! Debitis expedita aliquam quis aperiam eum commodi aut earum. <ButtonRegularOutline>
            Clicker moi
        </ButtonRegularOutline>
        </p>;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
};