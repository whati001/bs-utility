
const STORAGES = {
  user: user,
  temp: temp,
  session: session
}

/**
 * Increment variable value in storage by some value
 * @title Increment storage variable by value
 * @category bs-utility
 * @author andreas.karner@student.tugraz.at
 * @param {string} storageType - Variable storage
 * @param {string} varName - Variable name
 * @param {number} incValue - Value to increment the variable
 */
const incValue = async (storageType, varName, incValue) => {
  const storage = STORAGES[storageType]
  const oldValue = storage[varName]

  if (oldValue) {
    const oldNumber = Number(oldValue)
    if (oldNumber) {
      if (incValue) {
        const incNumber = Number(incValue)
        if (incNumber) {
          const newNumber = oldNumber + incNumber
          storage[varName] = newNumber
        } else {
          bp.logger.warn(
            `Failed to increment variable ${storageType}.${varName}, incValue not a Number`
          )
        }
      } else {
        bp.logger.warn(
          `Failed to increment variable ${storageType}.${varName}, incValue not set`
        )
      }
    } else {
      bp.logger.warn(
        `Failed to increment variable ${storageType}.${varName}, storage value not a number`
      )
    }
  } else {
    bp.logger.warn(
      `Failed to increment variable ${storageType}.${varName}, storage value not set`
    )
  }
}

return incValue(args.storageType, args.varName, args.incValue)