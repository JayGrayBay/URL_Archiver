import React from 'react';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: e.target.value,
    });
  };

  addItem = () => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValidUrl = urlRegex.test(this.state.currentItem);
  
    if (isValidUrl) {
      this.setState((prevState) => ({
        items: prevState.items.concat(this.state.currentItem),
        currentItem: '',
      }));
    } else {
      alert('Please enter a valid URL');
    }
  };
  

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.currentItem}
          onChange={this.handleInput}
        />
        <button onClick={this.addItem}>Add</button>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;
