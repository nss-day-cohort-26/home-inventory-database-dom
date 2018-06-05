const loadDatabase = function (localStorageKey) {
  // Get the string version of the database
  const databaseString = localStorage.getItem(localStorageKey)

  // Use JSON.parse() to convert the string back into an object
  return JSON.parse(databaseString)
}

const HomeInventoryDatabase = loadDatabase("HomeInventory")

const myStuffArticle = document.querySelector("#myStuff")

const homeInventoryFragment = document.createDocumentFragment()

// for (let table in HomeInventoryDatabase) {

//   const invTable = HomeInventoryDatabase[table]
const populateDomForDataSet = (dataSet) => {
  const invTable = HomeInventoryDatabase[dataSet]
  invTable.forEach(item => {
    const sectionElement = document.createElement("section")
    for (let key in item) {
      const paragraphElement = document.createElement("p")
      paragraphElement.textContent = `${key}: ${item[key]}`
      sectionElement.appendChild(paragraphElement)
    }
    homeInventoryFragment.appendChild(sectionElement)
  })
// }  
}

populateDomForDataSet("furniture")



myStuffArticle.appendChild(homeInventoryFragment)
