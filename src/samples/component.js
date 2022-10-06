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

// export default {
//   "name": "Navbar",
//   "node": {
//     "type": "element",
//     "content": {
//       "elementType": "nav",
//       "style": {
//         "border-bottom": {
//           "type": "static",
//           "content": "1px solid rgba(0,0,0,0.25)"
//         }
//       },
//       "children": [
//         {
//             "type": "element",
//             "content": {
//               "elementType": "component",
//               "semanticType": "sample",
//               "dependency": {
//                 "type": "local"
//               }
//             }
//         },
//         {
//           "type": "element",
//           "content": {
//             "elementType": "ul",
//             "name": "list-container",
//             "style": {
//               "list-style": "none",
//               "margin": "0px",
//               "padding": "0px",
//               "display": "flex",
//               "font-size": "18px"
//             },
//             "children": [
//               {
//                 "type": "element",
//                 "content": {
//                   "elementType": "li",
//                   "name": "home-link",
//                   "referencedStyles": {
//                     "5ee9a8c4855aa926ce281bce": {
//                       "id": "5ee9a8c4855aa926ce281bce",
//                       "type": "style-map",
//                       "content": {
//                         "mapType": "inlined",
//                         "styles": {
//                           "color": {
//                             "type": "static",
//                             "content": "red"
//                           },
//                           "border-bottom": "3px solid red",
//                           "padding-bottom": "7px"
//                         },
//                         "conditions": [
//                           {
//                             "conditionType": "element-state",
//                             "content": "hover"
//                           }
//                         ]
//                       }
//                     }
//                   },
//                   "style": {
//                     "padding": "10px 20px",
//                     "transition": "all .15s ease-in-out",
//                     "cursor": "pointer"
//                   },
//                   "children": [
//                     {
//                       "type": "element",
//                       "content": {
//                         "elementType": "navlink",
//                         "attrs": {
//                           "transitionTo": "home"
//                         },
//                         "children": [
//                           "Home"
//                         ]
//                       }
//                     }
//                   ]
//                 }
//               },
//               {
//                 "type": "element",
//                 "content": {
//                   "name": "team-link",
//                   "elementType": "li",
//                   "referencedStyles": {
//                     "5ee9a805ad9046338c1115f1": {
//                       "id": "5ee9a805ad9046338c1115f1",
//                       "type": "style-map",
//                       "content": {
//                         "mapType": "inlined",
//                         "styles": {
//                           "color": {
//                             "type": "static",
//                             "content": "red"
//                           },
//                           "border-bottom": "3px solid red",
//                           "padding-bottom": "7px"
//                         },
//                         "conditions": [
//                           {
//                             "conditionType": "element-state",
//                             "content": "hover"
//                           }
//                         ]
//                       }
//                     }
//                   },
//                   "style": {
//                     "padding": "10px 20px",
//                     "transition": "all .15s ease-in-out",
//                     "cursor": "pointer"
//                   },
//                   "children": [
//                     {
//                       "type": "element",
//                       "content": {
//                         "elementType": "navlink",
//                         "attrs": {
//                           "transitionTo": "team"
//                         },
//                         "children": [
//                           "Team"
//                         ]
//                       }
//                     }
//                   ]
//                 }
//               },
//               {
//                 "type": "element",
//                 "content": {
//                   "elementType": "li",
//                   "name": "contact-link",
//                   "referencedStyles": {
//                     "5ee9a89058cb16c5ae3c69c4": {
//                       "id": "5ee9a89058cb16c5ae3c69c4",
//                       "type": "style-map",
//                       "content": {
//                         "mapType": "inlined",
//                         "styles": {
//                           "color": {
//                             "type": "static",
//                             "content": "red"
//                           },
//                           "border-bottom": "3px solid red",
//                           "padding-bottom": "7px"
//                         },
//                         "conditions": [
//                           {
//                             "conditionType": "element-state",
//                             "content": "hover"
//                           }
//                         ]
//                       }
//                     }
//                   },
//                   "style": {
//                     "padding": "10px 20px",
//                     "transition": "all .15s ease-in-out",
//                     "cursor": "pointer"
//                   },
//                   "children": [
//                     {
//                       "type": "element",
//                       "content": {
//                         "elementType": "navlink",
//                         "attrs": {
//                           "transitionTo": "contact-us"
//                         },
//                         "children": [
//                           "Contact Us"
//                         ]
//                       }
//                     }
//                   ]
//                 }
//               }
//             ]
//           }
//         },
//         {
//           "type": "element",
//           "content": {
//             "elementType": "component",
//             "semanticType": "sample",
//             "attrs": {
//               "heading": "Studio"
//             },
//             "dependency": {
//               "type": "local"
//             }
//           }
//         }
//       ]
//     }
//   }
// }