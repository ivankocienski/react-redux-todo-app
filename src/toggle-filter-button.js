import React, {Component} from 'react';

class ToggleFilterButton extends Component {

    constructor(props) {
        super(props);
        this.state = { showAll: props.showAll };
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(event) {
        event.preventDefault();

        let nowShowAll = !this.state.showAll;
        this.setState({ showAll: nowShowAll });

        this.props.action(nowShowAll);
    }

    render() {
        let showState = this.state.showAll
            ? "showing all"
            : "showing only open items";

        return(
            <a href='#toggle-filter' onClick={this.buttonClick}>Toggle Filter ({showState})</a>
        );
    }
}

export default ToggleFilterButton;