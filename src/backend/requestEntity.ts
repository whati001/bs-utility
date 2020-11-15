import * as sdk from 'botpress/sdk'
import _ from 'lodash'

const generateFlow = async (data: any, metadata: sdk.FlowGeneratorMetadata): Promise<sdk.FlowGenerationResult> => {
  return {
    transitions: createTransitions(),
    flow: {
      startNode: 'entry',
      nodes: createNodes(data),
      catchAll: {
        next: []
      }
    }
  }
}

const createTransitions = (): sdk.NodeTransition[] => {
  return [
    { caption: 'On stored', condition: 'temp.stored == "true"', node: '' },
    { caption: 'On not stored', condition: 'temp.stored == "false"', node: '' },
    { caption: 'On already stored', condition: 'temp.alreadyStored == "true"', node: '' }
  ]
}

const createNodes = data => {
  console.log(data)
  const nodes: sdk.SkillFlowNode[] = [
    {
      name: 'entry',
      onEnter: [
        {
          type: sdk.NodeActionType.RunAction,
          name: 'builtin/setVariable {"type":"temp","name":"stored","value":"false"}'
        },
        {
          type: sdk.NodeActionType.RunAction,
          name: 'builtin/setVariable {"type":"temp","name":"alreadyStored","value":"false"}'
        }
      ],
      onReceive: undefined,
      next: [
        { condition: `${data.storage.value}.${data.varName} !== undefined`, node: 'setAlreadyStored' },
        { condition: 'true', node: 'sendQText' }
      ]
    },
    {
      name: 'setAlreadyStored',
      onEnter: [
        {
          type: sdk.NodeActionType.RunAction,
          name: 'builtin/setVariable {"type":"temp","name":"alreadyStored","value":"true"}'
        }
      ],
      onReceive: undefined,
      next: [
        { condition: 'true', node: '#' }
      ]
    },
    {
      name: 'sendQText',
      onEnter: [
        {
          type: sdk.NodeActionType.RenderElement,
          name: `#!${data.qText}`
        }
      ],
      onReceive: undefined,
      next: [
        { condition: 'true', node: 'parseResponse' }
      ]
    },
    {
      name: 'parseResponse',
      onEnter: undefined,
      onReceive: [
        {
          type: sdk.NodeActionType.RunAction,
          name: `bs-utility/requestEntity {"storageType":"${data.storage.value}","varName":"${data.varName}","entity":"${data.entity}"}`
        }
      ],
      next: [
        { condition: 'temp.stored == "true"', node: '#' },
        { condition: 'true', node: 'sendQFText' },
      ]
    },
    {
      name: 'sendQFText',
      onEnter: [
        {
          type: sdk.NodeActionType.RenderElement,
          name: `#!${data.qOnFailure}`
        }
      ],
      onReceive: undefined,
      next: [
        { condition: 'true', node: 'parseResponse' },
      ]
    }
  ]



  return nodes
}

export default { generateFlow }
