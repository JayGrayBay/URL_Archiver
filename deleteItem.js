deleteItem = (index) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item, i) => i !== index),
    }));
  };
  
  render(); {
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
