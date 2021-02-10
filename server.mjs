import express from 'express';
import info from './info.mjs';

const myApp = express();
const PORT = '3333';

myApp.get('/', ( req, res ) =>{
    res.send('This API contains my resume details including the areas of web development I am familiar with. You can run the command: [ npx abeco-resume ] to access my resume in the index.mjs file. Thank you.')
});

myApp.get('/abeco-resume', ( req, res ) => res.send( info ));

myApp.listen(`${PORT}`, () => {
    console.log( "Welcome to Abeco's resume" )
});