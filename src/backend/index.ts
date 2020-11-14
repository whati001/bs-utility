import * as sdk from 'botpress/sdk'

import en from '../translations/en.json'

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
    name: 'module.bs-utility.fillStorage',
    icon: 'comparison',
    flowGenerator: fillStorage.generateFlow
  }
]

const entryPoint: sdk.ModuleEntryPoint = {
  onServerStarted,
  onServerReady,
  skills: skillsToRegister,
  translations: { en },
  definition: {
    name: 'bs-utility',
    menuIcon: 'none',
    menuText: 'Utility by whati001',
    noInterface: false,
    fullName: 'Botpress Utility by whati001',
    homepage: 'https://github.com/whati001'
  }
}

export default entryPoint
