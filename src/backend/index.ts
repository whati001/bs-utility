import * as sdk from 'botpress/sdk'

import en from '../translations/en.json'

import requestEntity from './requestEntity'

const onServerStarted = async (bp: typeof sdk) => { }
const onServerReady = async (bp: typeof sdk) => { }

const skillsToRegister: sdk.Skill[] = [
  {
    id: 'requestEntity',
    name: 'module.bs-utility.requestEntity',
    icon: 'comparison',
    flowGenerator: requestEntity.generateFlow
  }
]

const entryPoint: sdk.ModuleEntryPoint = {
  onServerStarted,
  onServerReady,
  skills: skillsToRegister,
  translations: { en },
  definition: {
    name: 'bs-utility',
    noInterface: true,
    menuIcon: 'none',
    menuText: 'Provided some custom skills by whati001',
    fullName: 'Botpress Utility by whati001',
    homepage: 'https://github.com/whati001'
  }
}

export default entryPoint
