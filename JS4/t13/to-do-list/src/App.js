import './App.css';
import React from "react";



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : [],
            text : '',
            isStart : false
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handlClick = this.handlClick.bind(this);

    }
    render() {
        const  isStart = this.state.isStart;
        let start;
        if (isStart) start = <ToDoItems items={this.state.items}/>;
        return (
            <div className="wrapperToDo">
                <h1>Batman`s to-Do List</h1>
                <div className="inputWrapper">
                    <input className="textInput" placeholder='add new item' type="text" id='toDoValue' onChange={this.handleOnChange} value={this.state.text}/>
                    <input className="submitInput" value='+' type="submit" onClick={this.handlClick}/>
                </div>
                {start}
                <div className='fakeDiv'></div>
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
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState( state => ({
            items: state.items.concat(newItem),
            text: '',
            isStart: true
            })
        );
    }
}

class ToDoItems extends React.Component {
    render() {
        return (
            <div className="taskItemBlock">
                {this.props.items.map((item, i) => (
                    <ItemTask key={i} itemId ={item}/>
                ))}
            </div>

        )
    }
}
class ItemTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFulfilled : true,
        };
        this.handlClickCheck = this.handlClickCheck.bind(this);
    }
    handlClickCheck(e){
        e.target.disabled = 'disabled'
        this.setState({isFulfilled : false});
    }
    render() {
        return (
            <div key={this.props.itemId.id} className='itemCheckWrapper' >
                <label htmlFor={this.props.itemId.text}  className = {this.state.isFulfilled ? "unfulfilledTask" : "fulfilledTask"}>{this.props.itemId.text}</label>
                <input id={this.props.itemId.text} type='checkbox' onClick={this.handlClickCheck} />
            </div>
        )
    }
}

export default App;

