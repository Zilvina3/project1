import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Home() {
    const { isLoaded } = useLoadScript({
         googleMapsApiKey: 'AIzaSyCAnIQ6prhEDr4GDAHFYYoMHyJr1k3AGaE'
        })

        if( !isLoaded ) return <div>Loading . . .</div>

    return <Map />;

}

function Map() {
    const center = useMemo(() => ({ lat: 54.697350, lng: 25.257970}), [])

    return ( <GoogleMap
     zoom={15} 
     center={center}  
     mapContainerClassName='map-container' >
        <Marker position={center} />
    </GoogleMap>)
}