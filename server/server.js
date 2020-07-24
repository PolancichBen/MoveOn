const express = require('express');
const app = express();
const path = require('path');
const PORT = '8008';
const weather = require('openweather-apis');
const { weatherAPIkey } = require('../config');
const { Client } = require('pg');
const client = new Client();


client.connect((err) => {
  if (err) {
    console.log('error in db hookup', err)
    return
  }
  console.log('PostGres Runnin')
})


app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json())

//weather tool
weather.setLang('en');
weather.setUnits('imperial');
weather.setAPPID(weatherAPIkey)

app.get('/weather', (req, res) => {
  // let zip = req.query.zip;
  // weather.setZipCode(zip);
  // weather.getAllWeather((err, JSONObj) => {
  //   if (err) {
  //     console.error('Bad Hit', err)
  //     res.status(400).send('no good',err)
  //   } else {
  //     res.status(200).send(JSONObj)
  //   }
  // })
  res.status(200).send('ok')
})


app.get('/users', (req, res) => {
  client.query('Select * from users', (err, results) => {
    if (err) {
      console.log(err)
      res.status(400)
    } else {
      console.log(results)
      res.status(200).send(results)
    }
  })
})

app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});





////////////////////////////////////////////////////////////////////////
// WEATHER NPM MODULE --- https://www.npmjs.com/package/openweather-apis
// API KEY --- https://home.openweathermap.org/api_keys
///////////////////////////////////////////////////////////////////////
/*
weather.setCity('Tuscaloosa');
weather.setCoordinate(33.2079115, -87.5650316);

weather.setUnits('metric');
weather.setAPPID(weatherAPIkey)
console.log(weatherAPIkey)

weather.getAllWeather((err,JSONObj)=>{
  if (err){
    console.error('Bad Hit',err)
  } else {
    console.log('Good hit',JSONObj)
  }
})
*/