#!/usr/bin/env node

import { info } from "./info.mjs"

const {name:{firstName, middleName, lastName,email}, location:{city,stateAbbr},
    skillsOfInterest:{webLanguages:{scripting,markdown,styling},
        javascriptFrameworks:{title,popularUse}}, training:{school,address,parentOrg}} = info

console.log(`My name is ${firstName} ${middleName} ${lastName}\nMy email:${email}\nI live in ${city}, ${stateAbbr}\n---------------------\nThe skills I am focused on are: ${scripting}, ${markdown} and ${styling}\nI also use ${title} in ${popularUse}\n---------------------\nI am a student at the ${parentOrg}'s ${school} in ${address}\nThank you`)
