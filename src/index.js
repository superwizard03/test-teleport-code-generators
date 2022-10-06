import {
  createReactComponentGenerator,
  createVueComponentGenerator
} from '@teleporthq/teleport-code-generators'
// import createVueComponentGenerator from '@teleporthq/teleport-component-generator-vue'
import './prism.css'
import './styles.css'

// sammples - pick one!
import componentUIDL from './samples/component'
// import componentUIDL from './samples/tabSelector'

// instantiate a react generator
const reactGenerator = createReactComponentGenerator({
  variation: 'StyledJSX' // also try: "InlineStyles", "JSS", "CSSModules"
})

const vueGenerator = createVueComponentGenerator()

document.getElementById('uidl').textContent = JSON.stringify(
  componentUIDL,
  null,
  2
)

function generate(componentUIDL) {
  // get the code
  reactGenerator
    .generateComponent(componentUIDL)
    .then(result => {
      document.getElementById('react').textContent = result.files[0].content.trim()
      // eslint-disable-next-line
      Prism.highlightAll()
    })
    .catch(err => {
      console.log(err)
    })

  vueGenerator
    .generateComponent(componentUIDL)
    .then(result => {
      document.getElementById('vue').textContent = result.files[0].content.trim()
    })
    .catch(err => {
      console.log(err)
    })
}

generate(componentUIDL)
