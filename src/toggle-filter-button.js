import React, {Component} from 'react';

class ToggleFilterButton extends Component {

    constructor(props) {
        super(props);
        this.state = { showAll: props.showAll };
        //this.setState({ showAll: props.showAll });
        this.buttonClick = this.buttonClick.bind(this);

        console.log("ToggleFilterButton: constructor: state=", this.state);
    }

    buttonClick(event) {
        event.preventDefault();

        let nowShowAll = !this.state.showAll;
        this.setState({ showAll: nowShowAll });

        this.props.action(nowShowAll);
    }

    render() {
        console.log("ToggleFilterButton: render: state=", this.state);

        let showState = this.state.showAll
            ? "showing all"
            : "showing only open items";

        return(
            <a href='#toggle-filter' onClick={this.buttonClick}>Toggle Filter ({showState})</a>
        );
    }
}

export default ToggleFilterButton;