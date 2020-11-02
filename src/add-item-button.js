import React, {Component} from 'react';

import './add-item-button.css';

class AddItemButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "A value"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log("form: change");
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        let value = this.state.value.trim();

        if(value.length > 0) {
            this.setState({ value: "" });

            console.log("form: submit  value=", value);
            this.props.addItem(value);
        }
    }

    render() {
        return(
            <form id="add_item" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button id="addItem" type="submit">Add item</button>
            </form>
        )
    }
}

export default AddItemButton;