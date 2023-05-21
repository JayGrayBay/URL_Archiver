import React from 'react';
import TodoItem from './TodoItem';

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
  
  deleteItem = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item, i) => i !== index),
    }));
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
        {this.state.items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            deleteItem={() => this.deleteItem(index)}
          />
        ))}
      </div>
    );
  }
}

export default App;
