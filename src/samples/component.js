// export default {
//   "name": "MyComponent",
//   "node": {
//     "type": "element",
//     "content": {
//       "elementType": "text", // equivalent of the span
//       "children": [{
//         "type": "static", // equivalent of the text node inside
//         "content": "Teleport World!"
//       }]
//     }
//   }
// }

export default {
  "name": "Hello World Component",
  "propDefinitions": {
    "title": {
      "type": "string",
      "defaultValue": "Hello"
    }
  },
  "node": {
    "type": "element",
    "content": {
      "elementType": "container",
      "children": [
        {
          "type": "element",
          "content": {
            "elementType": "text",
            "children": [
              {
                "type": "dynamic",
                "content": {
                  "referenceType": "prop",
                  "id": "title"
                }
              },
              {
                "type": "static",
                "content": "Hello, World!"
              }
            ]
          }
        }
      ]
    }
  }
}