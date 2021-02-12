#!/usr/bin/env node

import { info } from "./info.mjs"


const { basics: { firstName, lastName, label, email, summary, location: { city, zipCode, stateAbbr, countryCode } }, portfolio:{ network, username, url}, work, volunteer: { organization, position, website, description }, education, awards: {nomination, date, awarder, exert}, skills: { field, focus = []}, otherSkills: { branch, spec, output, tools},languages, references: { appointment, title, contact}} = info

console.log(`\n\nIntroduction\n\n${summary}\n\nMy name is ${firstName} ${lastName}\nMy email:${email}\nI am a ${label} living in ${city}, ${stateAbbr} ${zipCode}, ${countryCode}\n\nPortfolio\n\nMy porfolio on my ${network} account ${username} can be found here: ${url}\n`)

console.log('\nWork history\n')

work.forEach((i)=>{
    console.log(`\n - Company: ${i.company}\n - Title: ${i.job}\n - Website: ${i.website}\n - Duration: ${i.duration}\n - Job description: ${i.detail}\n   ---------------------\n`)  
});

console.log(`\nVolunteering\n - Organization: ${organization}\n - Position: ${position}\n - Website: ${website}\n - Description: ${description}\n`)

console.log(`Education\n`)

education.forEach((i)=>{
    console.log(`- Institution: ${i.institution}\n - Location: ${i.campus}\n - Concentration: ${i.area}\n - Type:${i.studyType}\n - End: ${i.endYear}\n - GPA: ${i.gpa}\n`)  
});
console.log(`\n   ---------------------\n`)
console.log(`\nskills\n\n- Title: ${field}\n`)

focus.forEach((i)=>{
    console.log(`- Side: ${i.type}\n- Languages: ${i.webLanguages}\n- Frameworks: ${i.frameworks}\n`)
})

console.log(`\n   ---------------------\n`)

console.log(`\notherSkills\n - Area: ${branch}\n - Branch: ${spec}\n - Output: ${output}\n - Tools: ${tools}\n`)

console.log(`\nAwards\n - Denomination: ${nomination}\n - Date: ${date}\n - Awarder: ${awarder}\n - Description: ${exert}\n`)

console.log(`\nLanguages\n   ${languages}\n `)

console.log(`\nReferences\n - Name: ${appointment}\n - Title: ${title}\n - Contact: ${contact}\n`)

console.log(`\nIn conclusion, I am eager to utilize my skillset to contribute to your organizational goal attainment.\n`)

