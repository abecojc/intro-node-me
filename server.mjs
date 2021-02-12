import express from 'express';
import { info } from './info.mjs';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', ( req, res ) =>{
    res.send(`\nThis API contains my resume details including the areas of web development I am familiar with.\nYou can run the command: npx intro-node-me to access my resume in the index.mjs file. Thank you.`)
});

app.get('/intro-node-me', ( req, res ) => res.send( info ));

app.get('/basics', ( req, res ) => res.send( info.basics ));
app.get('/location', ( req, res ) => res.send( info.location ));
app.get('/portfolio', ( req, res ) => res.send( info.portfolio ));
app.get('/work', ( req, res ) => res.send( info.work ));
app.get('/volunteer', ( req, res ) => res.send( info.volunteer ));
app.get('/education', ( req, res ) => res.send( info.education ));
app.get('/skills', ( req, res ) => res.send( info.skills ));
app.get('/otherSkills', ( req, res ) => res.send( info.otherSkills ));
    

app.listen( PORT, () => {
    console.log( `Welcome to Abeco's resume running on port ${PORT}` )
});