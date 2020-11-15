
  /**
   * Store NLU entity value into variable
   * @title Store entityName value if exists into storageType.varName
   * @category bs-utility
   * @author andreas.karner@student.tugraz.at
   * @param {string} storageType - Variable storage
   * @param {string} varName - Variable name
   * @param {string} entityName - NLU entity to store
   */
  const storeEntityValue = async (storageType, varName, entityName) => {
    const entities = event.nlu.entities
    for (let ent of entities) {
      if (ent.name === entityName) {
        const entValue = ent.data.value
        session[varName] = entValue
        temp.stored = true

        bp.logger.info(
          `NLU entity ${entityName} with value ${entValue} stored to ${storageType}.${varName} and set temp.storage = true flag`
        )
        return
      }
    }
    bp.logger.info(`NLU entity ${entityName} not found, set temp.stored = false`)
    temp.stored = false
  }

  return storeEntityValue(args.storageType, args.varName, args.entityName)