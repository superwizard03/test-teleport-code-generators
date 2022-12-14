export default {
  $schema:
    'https://raw.githubusercontent.com/teleporthq/teleport-code-generators/master/src/uidl-definitions/schemas/component.json',
  name: 'Cards',
  propDefinitions: {
    items: {
      type: 'array',
      defaultValue: []
    }
  },
  content: {
    type: 'container',
    name: 'cards-container',
    style: {
      width: '100%',
      border: '1px solid red',
      display: 'flex'
    },
    children: [
      {
        type: 'text',
        name: 'joker',
        children: ['Last']
      }
    ],
    repeat: {
      content: {
        type: 'container',
        name: 'card-container',
        style: {
          backgroundColor: 'royalblue',
          color: 'white',
          margin: '10px',
          padding: '10px',
          border: '1px solid black'
        },
        children: [
          {
            type: 'text',
            style: {
              border: '1px solid red',
              padding: '10px',
              lineHeight: '1.5'
            },
            name: 'card',
            children: ['$item']
          }
        ]
      },
      dataSource: 'props.items'
    }
  }
}
