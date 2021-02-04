import { info } from "./info.js"

const {name:{firstName, middleName, lastName}, location:{city,stateAbbr},
    skillsOfInterest:{webLanguages:{scripting,markdown,styling},
        javascriptFrameworks:{title,popularUse}}, training:{school,address,parentOrg}} = info
console.log(`My name is ${firstName} ${middleName} ${lastName}`)
console.log(`From ${city} ${stateAbbr}`)
console.log("---------------------")
console.log(`The skills I am focused on are: ${scripting}, ${markdown} and ${styling}`)
console.log(`Using ${title} in ${popularUse}`)
console.log("---------------------")
console.log(`I am a student at ${parentOrg}'s ${school} in ${address} `)
console.log(`Thank you`)
