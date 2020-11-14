import * as sdk from 'botpress/sdk'

import fillStorage from './fillStorage'

const onServerStarted = async (bp: typeof sdk) => {
  console.log('Custom Module bp-utilities by whati001 loaded on Server startup.')
}
const onServerReady = async (bp: typeof sdk) => {
  console.log('Custom Module bp-utilities by whati001 loaded on Server ready.')
}


const skillsToRegister: sdk.Skill[] = [
  {
    id: 'fillStorage',
    name: 'module.fill-storage.choice',
    icon: 'numbered-list',
    flowGenerator: fillStorage.generateFlow
  }
]

const entryPoint: sdk.ModuleEntryPoint = {
  onServerStarted,
  onServerReady,
  skills: skillsToRegister,
  definition: {
    name: 'bs-utility',
    menuIcon: 'none',
    menuText: 'Utility by whati001',
    noInterface: false,
    fullName: 'Utility by whati001',
    homepage: 'https://github.com/whati001'
  }
}

export default entryPoint
