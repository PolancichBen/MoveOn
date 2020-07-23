const express = require('express');
const app = express();
const path = require('path');
const PORT = '8008';
const weather = require('openweather-apis');

app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json())

//weather tool
var weatherAPIkey = '5f96734f780f0c45fae637427fb90440';
weather.setLang('en');
weather.setUnits('imperial');
weather.setAPPID(weatherAPIkey)



app.get('/weather', (req, res) => {
  console.log(req.query.zip)
   //need to send zipcode, or city, or use googles coordinate thing
   let zip = req.query.zip;
  weather.setZipCode(zip);
  // weather.getAllWeather((err, JSONObj) => {
  //   if (err) {
  //     console.error('Bad Hit', err)
  //     res.status(400).send('no good',err)
  //   } else {
  //     res.status(200).send(JSONObj)
  //   }
  // })
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