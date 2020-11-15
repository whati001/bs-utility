
  const STORAGES = {
    user: user,
    temp: temp,
    session: session
  }

  /**
   * Decrement variable value in storage by some value
   * @title Decrement storage variable by value
   * @category bs-utility
   * @author andreas.karner@student.tugraz.at
   * @param {string} storageType - Variable storage
   * @param {string} varName - Variable name
   * @param {number} decValue - Value to decrement the variable
   */
  const decValue = async (storageType, varName, decValue) => {
    const storage = STORAGES[storageType]
    const oldValue = storage[varName]
    if (oldValue) {
      const oldNumber = Number(oldValue)
      if (oldNumber) {
        const newNumber = oldNumber - decValue
        storage[varName] = newNumber
      } else {
        bp.logger.warn(
          `Failed to decrement variable ${storageType}.${varName} by ${decValue}, the value is not a number`
        )
      }
    } else {
      bp.logger.warn(`Failed to decrement variable ${storageType}.${varName} by ${decValue}, it does not exist`)
    }
  }

  return decValue(args.storageType, args.varName, args.decValue)