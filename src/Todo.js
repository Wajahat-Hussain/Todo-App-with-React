import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            item : "",
            todoItems : []
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.addData = this.addData.bind(this)
        this.delete = this.delete.bind(this)
    }
    onChangeHandler(e){
        let inputValue = e.target.value;
        this.setState({
            item : inputValue
        })
    }
    addData(){
        let inputValue = this.state.item
        let itemInstance = this.state.todoItems
        itemInstance.push(inputValue)
        this.setState({
         todoItems : itemInstance,
         item : ""
        })
    }
    delete(e){
        let id = e.target.id
        let itemInstance = this.state.todoItems
        itemInstance.splice(id,1)
        this.setState({
            todoItems : itemInstance
        })
    }
    render() {
        var itemList =  this.state.todoItems.map((e,i)=>
            <li key={i}>{e} <span onClick={this.delete} id={i}>X</span> </li>
        )
        return (
            <div>
                <div className="header">React JS Todo App</div>
                <div className="body">
                    <ul>
                        {itemList}
                    </ul>
                </div>
                <div className="footer">
                    <input type="text" placeholder="Enter Items..." value={this.state.item} onChange={this.onChangeHandler} />
                    <button onClick={this.addData}>+</button>
                </div>
            </div>
        )
    }
}
