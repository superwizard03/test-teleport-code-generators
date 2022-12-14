export default {
  $schema:
    'https://raw.githubusercontent.com/teleporthq/teleport-code-generators/master/src/uidl-definitions/schemas/component.json',
  name: 'TabSelector',
  stateDefinitions: {
    activeTab: {
      type: 'number',
      defaultValue: 0
    }
  },
  content: {
    type: 'container',
    name: 'container',
    children: [
      {
        type: 'container',
        name: 'tabs',
        children: [
          {
            type: 'button',
            name: 'tab1',
            children: ['Click'],
            style: {
              border: '1px solid black',
              padding: '5px 10px'
            },
            events: {
              onClick: [
                {
                  type: 'stateChange',
                  modifies: 'activeTab',
                  newState: 0
                }
              ]
            }
          },
          {
            type: 'button',
            name: 'tab2',
            children: ['any'],
            style: {
              border: '1px solid black',
              padding: '5px 10px'
            },
            events: {
              onClick: [
                {
                  type: 'stateChange',
                  modifies: 'activeTab',
                  newState: 1
                }
              ]
            }
          },
          {
            type: 'button',
            name: 'tab3',
            children: ['of'],
            style: {
              border: '1px solid black',
              padding: '5px 10px'
            },
            events: {
              onClick: [
                {
                  type: 'stateChange',
                  modifies: 'activeTab',
                  newState: 2
                }
              ]
            }
          },
          {
            type: 'button',
            name: 'tab4',
            children: ['these'],
            style: {
              border: '1px solid black',
              padding: '5px 10px'
            },
            events: {
              onClick: [
                {
                  type: 'stateChange',
                  modifies: 'activeTab',
                  newState: 3
                }
              ]
            }
          }
        ]
      },
      {
        type: 'container',
        name: 'text',
        style: {
          width: 100,
          height: 50,
          display: 'flex',
          alignItems: 'flex-start',
          backgroundColor: '#e4f2f8',
          borderColor: '#0089be',
          borderWidth: 0,
          borderStyle: 'solid',
          '@media (max-width: 835px)': {
            width: 228,
            height: 154
          },
          '@media (max-width: 640px)': {
            backgroundColor: '#e91e63'
          },
          '@media (max-width: 634px)': {
            height: 276
          }
        },
        children: ['Active tab: ', '$state.activeTab']
      },
      {
        type: 'state',
        name: 'activeTab',
        states: [
          {
            value: 0,
            content: {
              type: 'text',
              children: ['This is the first tab']
            }
          },
          {
            value: 1,
            content: {
              type: 'text',
              children: ['This is the second tab']
            }
          },
          {
            value: 2,
            content: {
              type: 'text',
              children: ['This is the third tab']
            }
          },
          {
            value: 3,
            content: {
              type: 'text',
              children: ['This is the fourth tab']
            }
          }
        ]
      }
    ]
  }
}
