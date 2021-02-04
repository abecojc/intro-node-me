import { info } from "./info.js"

const {name:{firstName, middleName, lastName}, location:{city,stateAbbr},
    skillsOfInterest:{webLanguages:{scripting,markdown,styling},
        javascriptFrameworks:{title,popularUse}}, } = info
console.log(`My name is ${firstName} ${middleName} ${lastName}`)
console.log(`From ${city} ${stateAbbr}`)
console.log("---------------------")
console.log(`The skills I am focused on are: ${firstName} ${middleName} ${lastName}`)
console.log(`From ${city} ${stateAbbr}`)
console.log("---------------------")
console.log(`My name is ${firstName} ${middleName} ${lastName}`)
console.log(`From ${city} ${stateAbbr}`)
console.log("---------------------")