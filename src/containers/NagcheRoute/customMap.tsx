import { GoogleApiWrapper } from 'google-maps-react';
import {Map, Marker } from 'google-maps-react';
import {} from './mapStyles.json';
const mapStyle = './mapStyles.json';

function CustomMap({ google, locations = [] }: any) {
    

    return (
        
      <Map
          google={google}
          containerStyle={{
              position: "static",
              width: "100%",
              height: "100"
          }}
          style={{
              style: mapStyle,
              width: "94.5%",
              height: "95%",
              "margin-left": "2.5%",
              "margin-top": "13%"
          }}
          initialCenter={{
            lat: -38.2555834745345,
            lng: -72.88456333399817
          }}
          zoom={locations.length = 10}
      >
          {locations.map((coords: any) => <Marker position={coords} />
          )}
      </Map>
  )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAGTjefET42RORseiTh5HgIYOq_oXaZgJY",
})(CustomMap);
