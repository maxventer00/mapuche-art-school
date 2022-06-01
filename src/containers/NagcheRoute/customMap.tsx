import React from 'react'
import { GoogleMap, KmlLayer, LoadScript } from '@react-google-maps/api';
import mapStyles from './mapStyles.json'
import useWindowDimensions from './useWindowDimensions';


const center = {
  lat: -38.2555834745345,
  lng: -72.88456333399817
};

function MyComponent() {
  const { height, width } = useWindowDimensions();
  const containerStyle = {
    width: width,
    height: '300%'
  };
  return (

    <LoadScript
      googleMapsApiKey="AIzaSyAGTjefET42RORseiTh5HgIYOq_oXaZgJY"

    >
      <GoogleMap
      
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={{
          styles: mapStyles
          }}
      >
       
        <KmlLayer url="https://firebasestorage.googleapis.com/v0/b/mapuche-art.appspot.com/o/kmlData%2FKML%20TEST.kmz?alt=media&token=8c55854c-a51a-4ae9-94c2-ce832cda172b" />
        
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)