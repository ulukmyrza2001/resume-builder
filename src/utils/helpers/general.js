export const saveToLocalStorage = (key, data) => {
   try {
      localStorage.setItem(key, JSON.stringify(data))
   } catch (error) {
      console.error(error)
   }
}

export const getDataFromLocalStorage = (key) => {
   try {
      return JSON.parse(localStorage.getItem(key))
   } catch (error) {
      console.error(error)
   }
}
export const counterGenerated = (step) => {
   return step + 1
}
