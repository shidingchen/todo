import React,{ Component } from 'react';

export default class App extends Component {


    
updateNewTextValue = event => {
  this.setState({ newItemText: event.target.value });
};

createNewTodo = () => {
  if(
    !this.state.todoItems.find(item => item.action === this.state.newItemText)
  ){
    this.setState({
      todoItems:[
        ...this.state.todoItems,
        {
          action: this.state.newItemText,
          done: false
        }
      ],
      newItemText: ""
    });
  }
}


todoTableRows = () =>
this.state.todoItems.map(item=>(
  <tr key={item.action}>
    <td>{item.action}</td>
    <td>
      <input
      type="checkbox"
      checked={item.done}
      onChange={() => this.toggleToDo(item)}
      />
    </td>
  </tr>
));

toggleTodo = todo =>
this.setState({
  todoItems: this.state.todoItems.map(item=>
    item.action === todo.action? {...item, done: !item.done }: item
    )
});


  render = () => {
    return(
      <div>
      <h4 className="bg-primary text-white text-center p-2">
      {this.state.userName}'s To Do List
      </h4>
      <div className="container-fluid">
        <div className="my-1">
          <input
           className="form-control"
           value={this.state.newItemText}
           onChange={this.updateNewTextValue}
           />
      <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
        Add
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
            </tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
            </table>     
      </div>
      </div>
      </div>
    );
    }
  }

