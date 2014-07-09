DIY One-way Data Binding

Using the [Document Object Model (DOM) API](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference):

 * [document.getElementById](https://developer.mozilla.org/en-US/docs/Web/API/document.getElementById) Looks up an element by id
 * [input.value](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attr-value) Gets the entered text
 * [element.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node.textContent) Sets the text inside the element
 * [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener) ([keyup](https://developer.mozilla.org/en-US/docs/Web/Reference/Events/keyup)) Calls a function when the entered text changes
