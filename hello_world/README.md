# The react-dome
Is a package that provides DOM-specific methods that are used to manipulate the DOM of an application.

To access the package in your application your will need to import the react module.

```
Import * as ReactDOM form ' react-dom';
```
when using ES5 syntax use:
```
var ReactDOM = Require('react-dom');
```
## The react-dom has this methods
 - ``` createPortal() ``` 
 - ``` flushSync() ```
 - ``` render() ```
 - ``` findDOMNode() ```
 - ``` unmountComponentAtNode() ```

###  ``` createPortal() ``` 
Takes the parameters **child**, **container**.
it is used to create ports that provides ways of rendering children into a DOM node outside the hierarchy of the dome component.
### ``` flushSync() ```
Takes a call back as an parameter.
It allows for synchronously update of a DOM component using the callback functions.

```
// the state updates synchronously.
flushSync((name) => {
    if (name){
        setCount(count + 1);d
    }
}
);
// The dome is updated by now.
```

### ``` render() ```
this method serves(renders) an element into the DOM.
It takes **element**, **container[, callback]** as parameters.
The method returns NULL s the state of the parameters.
The callback is executed after the component is rendered.
When rendering only the child element is modified. The parent element is not modified.

### ``` findDOMNode() ```
It is returns the DOM browser element if the component has been mounted in the DOM.
