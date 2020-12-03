import './App.css';
import React from "react";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            text : ''
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handlClick = this.handlClick.bind(this);

    }
    render() {
        return (
            <div>
                <input type="text" id='toDoValue' onChange={this.handleOnChange} value={this.state.text}/>
                <input type="submit" onClick={this.handlClick}/>
                <ToDoItem items={this.state.items}/>
            </div>
            )

    }
    handleOnChange(e) {
        this.setState({text: e.target.value})
    }
    handlClick(){
        if (this.state.text.length === 0) {
            return;
        }
        const newItem = this.state.text;

        this.setState( state => ({
            items: state.items.concat(newItem),
            text: ''
            })
        );
    }
}

class ToDoItem extends React.Component {
    render() {
        return (
            <div>
                {this.props.items.map(item => (
                    <div>{item.text}</div>
                ))}
            </div>

        )
    }
}

export default App;
