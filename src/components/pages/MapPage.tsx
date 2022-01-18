import React, {memo, useEffect, useState} from 'react';
import ReactMapboxGl, { Layer, Feature, GeoJSONLayer, MapContext } from 'react-mapbox-gl';
import {AnySourceData, Map} from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {getLocation, getLocationV2} from "../../services/driver-location";
import { interval, map, skip, switchMap} from "rxjs";
import { random } from "lodash-es";

interface UrlParams {
  latitude?: string;
  longitude?: string;
}

const MapPage = () => {
  const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN as string,
    logoPosition: 'top-left',
  })
  useEffect(() => {
    const intervalSub = interval(10000).pipe(
      switchMap(() => getLocation),
      map(({latitude, longitude}) => [latitude, longitude]),
      map((coordinates) => ({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates
            }
          }
        ]
      })),
      skip(1),
    ).subscribe((geojson) => {
    })
    return () => {
      intervalSub.unsubscribe();
    }
  }, [])
  const styleLoadHandler = (mapboxGl: Map) => {
    mapboxGl.loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAOCAYAAADez2d9AAAABHNCSVQICAgIfAhkiAAAA+tJREFUOE+VVFtoHGUU/v6ZnX+GndlNU02RlUrr5cWFSvRRWnwVg9ReUi+o6KKGPngpLY0xERUN1jQPKdFijQ1agwiimASxVI1Vq31Y08ZNTBOb3dzZ7Ha7SWZ3ZjPZmfHM6vZhAwn+8PNfOd853znnY6gYAwMJZds2KIYBxYTBXcPwqWqNKQgF5jiKa9u6YxiOX5L8uaoqwWrr6NgaeSYS4QKaPVM+n48JgiDTKqiqmg+FQkYZgnmbaDQq+YObH3Dt4uOrxdXazLWMmkqn+Xxqwcd9XHRd16Jv9Je5OUN3gmpQdoACY25RhGAn4ldDisznHt69F0FNYy5zJcaYwLm0ZBpG9/Cflzvr6+ttNnH+4l3O1tC3q8XiHWfPnWOZzHWk0inyUIIW1MBlBfQGAoRt28jldGzaVA1FllEVCCB6aRD5vI4VywKFjfbWYwgENFB0oBABx0Xe0L8aSsSfZVcvxzp4zZYXY7EYjrzbirxplubunbvwetNrlSyvOe95+kks6ksQyTCZR2TffuzdfwCiSGe6E0URjuMgk0o1sMmJqWEmy+H3u7rQ/9MA8gWDPDHQfew47tmxY0OwJxqex9TszH/GRdzCObo/OQOZGCkDEikwjfz3bHpuIU8U+Q+1NGM0kSiBFcwCLnzTCy7xDcFeajqK3wcHITBWioSTo329/dC0AJ3pjiLz3haz2SUPzCEw9twrL2M2nS6B2dYqfuvrp1zkoarauoCdH53CL9Eo0plr0Cmf8koBX3/xJW6u2fIvmEBgtJqm6awLZpCXfr+6LtiJUx9iaGwciiSX8jPyx0V8/ulnqKkAI1sOm5pNFsiafKilhWiM/28a3zrehrHJSchEucxlzI2OoKenZw2N2cXsIptMTA8ziYdPnj6N3h9/uFEgXVTC99bWbpizg682Ikn0y1QYHqCUW8aJzg+gKBUFYhrfsfilkTax5qbDo1eu4Mg7bxMY6QbNuvt3ovloY6m/yqO8p4ZFeR5oeAE5otsDk4jGp+rq8OBDdZWl76ZTqQgbOnt+u//O7X2kHHf//OsF5jX0/Pw8SCFA8gFZ8cMqrpaa03Yd6MvLqK7eTKVNTa1pGB3/m5wzUKSGZvT+3htvUlGpN5rapR7Tdf3M8PzMwZJckce+v8bGdjGIj5Fa3Je9ntWS6RRfSKYkkdyl9xUvFu8nJdqlspZd1zHprigwwZ6YGL+VS9LMI3v2QfX7Bcd1uE8UGUVLclX4OBYbPFmSq7VCPOALBAK8uvp2aTobl8iIEAoGLfKO0T056rjJZFKmyiuQ2Bbb29tvO9zY9KjiE1o9W5xzZlmWpOtcCASsQjgc9nS1NP4BWO7/FyhE9AMAAAAASUVORK5CYII=', (error, image) => {
      // @ts-ignore
      mapboxGl.addImage('car', image);
    })
    getLocation.pipe(
      map(({latitude, longitude}) => ({
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.93978881835936,
                21.124536886064668
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.74718475341797,
                21.136385707660697
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.6943130493164,
                21.13926771024567
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.69808959960936,
                21.103078502607108
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.67268371582031,
                21.079054244532124
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.7492446899414,
                21.04573418134116
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.77877044677734,
                21.066239718780068
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.78357696533203,
                21.064958205472088
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.72006225585938,
                21.06880271227345
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.67646026611328,
                21.077132136075168
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.65311431884766,
                21.060472821956594
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.6503677368164,
                21.05855047334094
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.64350128173827,
                21.028109978642814
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.81001281738281,
                21.02586674875087
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.81859588623047,
                21.024905354176795
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.93360900878906,
                21.118451988100826
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.97755432128906,
                21.11204656269204
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                106.0122299194336,
                21.097953653592086
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                106.01497650146484,
                21.073608206025906
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                106.01394653320312,
                21.05278327849634
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                106.01428985595703,
                21.025225819723776
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                106.00845336914062,
                21.00086847527049
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.99197387695312,
                21.073608206025906
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.98373413085938,
                21.034198575294266
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.96965789794922,
                21.057909684950264
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.93807220458984,
                21.07104529534946
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.91266632080078,
                21.090586373279148
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.87112426757812,
                21.08450008351735
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.84400177001953,
                21.086101762888724
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.82271575927733,
                21.100516100210157
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.8913803100586,
                21.100195796801152
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.91644287109374,
                21.008881198605163
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.8807373046875,
                21.03676212050792
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.86151123046875,
                20.99734274071184
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.82649230957031,
                20.963042616177393
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.77877044677734,
                20.968492694721533
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.69053649902342,
                20.973621998927747
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.70152282714844,
                20.921038292663134
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.63766479492188,
                20.979071691781773
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.68504333496094,
                21.013368135716764
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.8865737915039,
                21.131582245478572
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.97549438476562,
                20.99734274071184
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                106.0074234008789,
                20.968813281390563
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.97240447998047,
                20.943164176274063
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.9305191040039,
                20.913341567239513
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.98613739013672,
                20.912379448777667
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.97789764404297,
                21.16616369731407
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.98064422607422,
                21.163922551671376
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.88687419891356,
                21.014810336839368
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.81619262695312,
                21.013047644684633
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.80657958984375,
                21.01400911571511
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.77911376953125,
                20.99157317727192
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.95558166503905,
                21.01208616745653
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.9579849243164,
                20.976186585026024
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.96622467041016,
                20.89955061280578
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.8529281616211,
                20.90596516794462
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.8803939819336,
                20.87902219382663
              ]
            }
          },
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "Point",
              "coordinates": [
                105.76400756835938,
                20.891211281151076
              ]
            }
          }
        ]
      })),
    ).subscribe((next) => {
      mapboxGl.addSource('iss', {
        type: 'geojson',
        // @ts-ignore
        data: next,
      })
      mapboxGl.addLayer({
        'id': 'iss',
        'type': 'symbol',
        'source': 'iss',
        'layout': {
          'icon-image': 'car',
          'icon-rotate': random(0, 60),
          "icon-allow-overlap": true,
          'icon-size': 1
        },
        minzoom: 12
      })
    });
  };
  return (
    <Map
      style="mapbox://styles/mapbox/dark-v10"
      center={[
        105.83977460861206,
        20.984921876135513
      ]}
      containerStyle={{
        height: '100%',
        width: '100%'
      }}
      onStyleLoad={styleLoadHandler}
    >
    </Map>
  )
};

export default memo(MapPage);
