
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
      if (decValue) {
        const decNumber = Number(decValue)
        if (decNumber) {
          const newNumber = oldNumber + decNumber
          storage[varName] = newNumber
        } else {
          bp.logger.warn(
            `Failed to decrement variable ${storageType}.${varName}, decValue not a Number`
          )
        }
      } else {
        bp.logger.warn(
          `Failed to decrement variable ${storageType}.${varName}, decValue not set`
        )
      }
    } else {
      bp.logger.warn(
        `Failed to decrement variable ${storageType}.${varName}, storage value not a number`
      )
    }
  } else {
    bp.logger.warn(
      `Failed to decrement variable ${storageType}.${varName}, storage value not set`
    )
  }
}

return decValue(args.storageType, args.varName, args.decValue)