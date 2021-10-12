import { Component } from "react";
import { ButtonRegularOutline } from './buttons';

export class ParagrapheClass extends Component {
    state = {
        count: 0
    }
    constructor() {
        super();
        console.log("constructor");
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    updateState = () => {
        this.setState({
            count: 5
        });
    }

    render() {
        console.log("render");
        return <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dolorum harum dolor, ea molestias vitae aspernatur rerum, earum optio expedita incidunt! Debitis expedita aliquam quis aperiam eum commodi aut earum.
            <ButtonRegularOutline onClick={this.updateState}>
                Clicker moi {this.state.count}
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