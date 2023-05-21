import React from 'react';

class TodoItem extends React.Component {
  openUrl = (url) => {
    window.open(url, '_blank');
  };

  render() {
    return (
      <div>
        {this.props.item}
        <button onClick={() => this.openUrl(this.props.item)}>Open</button>
        <button onClick={this.props.deleteItem}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
