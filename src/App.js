import React from 'react';
import TdForm from './components/TodoComponents/TodoForm';
import TdList from './components/TodoComponents/TodoList';
const todoData = [{
  name: 'dumb things',
  id: 123,
  completed: false
}];
class App extends React.Component {
  constructor() {
    super();
    this.state = { todoData };
    console.log(this.state)
  }
  toggle = clickedId => {
    // no mutating the current state
    // for every array and every object - create a new one (..., or array methods)
    const newData = this.state.todoData.map(item => {
      // loop through the array
      // find the item we clicked (id, maybe index)
      // toggle that item's purchased property
      if (item.id === clickedId) {
        // toggle purchased
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });

    // Update state with the new array
    this.setState({
      todoData: newData
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newItem]
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>Here is what you need to do!</h1>
          <TdForm addNewItem={this.addNewItem} />
        </div>
        <TdList
          tasks={this.state.todoData}
          toggle={this.toggle}
        />
      </div>
    );
  }
}

export default App;
