# State and lifecycle

To display element on the UI the only way we have learned is by using  ``` root.render() ```

- This method has not allowed the compends to be true reusable. Encapsulations of the components enhances reusability. 

## Encapsulations of functions
The data in this clock functions is enclosed in itself. The clock sets and updates it time by itself.



```
const root = ReactDOM.createRoot(document.getElementById('root'));

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
```
The setting of the clocks times and its implication details should be on the clock self. 
- This can be implemented by using classes instate of functions.
- This is done by adding state to the clock component class. The state is private and fully controlled by the component.

## The Clock Class

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```
