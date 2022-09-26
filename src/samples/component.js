export default {
  "name": "MyComponent",
  "node": {
    "type": "element",
    "content": {
      "elementType": "text", // equivalent of the span
      "children": [{
        "type": "static", // equivalent of the text node inside
        "content": "Teleport World!"
      }]
    }
  }
}