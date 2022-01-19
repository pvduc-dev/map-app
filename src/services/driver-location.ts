import {interval, map, of} from "rxjs";

export const getLocation = of({
  "name": "iss",
  "id": 25544,
  "latitude": 105.83977460861206,
  "longitude": 20.984921876135513,
  "altitude": 420.05868791928,
  "velocity": 27601.951307543,
  "visibility": "eclipsed",
  "footprint": 4507.7620262824,
  "timestamp": 1642493079,
  "daynum": 2459597.8365625,
  "solar_lat": -20.51875610267,
  "solar_lon": 61.430810583312,
  "units": "kilometers"
})

export const getLocationV2 = interval(10000).pipe(
  map(val => ({
    "name": "iss",
    "id": 25544,
    "latitude": 105.83977460861206 + (val * 0.00001),
    "longitude": 20.984921876135513,
    "altitude": 420.05868791928,
    "velocity": 27601.951307543,
    "visibility": "eclipsed",
    "footprint": 4507.7620262824,
    "timestamp": 1642493079,
    "daynum": 2459597.8365625,
    "solar_lat": -20.51875610267,
    "solar_lon": 61.430810583312,
    "units": "kilometers"
  })),
)
