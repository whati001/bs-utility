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
  const nodes: sdk.SkillFlowNode[] = [
    {
      name: 'entry',
      onEnter: undefined,
      onReceive: undefined,
      next: [
        { condition: `${data.storage}.${data.varName} !== undefined`, node: 'setAlreadyStored' },
        { condition: 'true', node: 'sendQText' }
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
        { condition: 'true', node: 'sendQText' }
      ]
    },
    {
      name: 'setStored',
      onEnter: [
        {
          type: sdk.NodeActionType.RunAction,
          name: 'builtin/setVariable {"type":"temp","name":"stored","value":"true"}'
        }
      ],
      onReceive: undefined,
      next: [
        { condition: 'true', node: '#' }
      ]
    },
    {
      name: 'setNotStored',
      onEnter: [
        {
          type: sdk.NodeActionType.RunAction,
          name: 'builtin/setVariable {"type":"temp","name":"stored","value":"false"}'
        }
      ],
      onReceive: undefined,
      next: [
        { condition: 'true', node: '#' }
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
        { condition: 'true', node: 'setNotStored' }
      ]
    }
  ]



  return nodes
}

export default { generateFlow }
