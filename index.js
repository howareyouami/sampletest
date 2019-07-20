var React = require('react');
var ReactDOM = require('react-dom');
import List from './list'

class MyComponent extends React.Component {
  render() {
    return (
    <>
      <div>Hello World</div>
      <List/>
    </>
    );

  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<MyComponent />, rootElement);