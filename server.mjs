import express from 'express';
import { info } from './info.mjs';

const app = express();
const PORT = '3333';

app.get('/', ( req, res ) =>{
    res.send('This API contains my resume details including the areas of web development I am familiar with. You can run the command: [ npx abeco-resume ] to access my resume in the index.mjs file. Thank you.')
});

app.get('/abeco-resume', ( req, res ) => res.send( info ));

app.listen( PORT, () => {
    console.log( "Welcome to Abeco's resume" )
});