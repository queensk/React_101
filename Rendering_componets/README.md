## function and class components

objects and functions are considered as first class objects in js.
React will render a components the same way it will render a functions.

The welcome function is and welcome class will all be equivalent when react is rendering.
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
## component composition
Elements in the user interface are regarded as components.
Each element can be made as a components that can be independently deployed.
A component can referee to another component which is refereed to as component compositions.
### Welcome component
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
An App component composing the welcome component.
```
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```
Splitting of components into smaller parts makes the app reusable.

The props input in objects and functions are read only. This means that they should not be modified in the functions.
