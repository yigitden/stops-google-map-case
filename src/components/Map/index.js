import { useMemo, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useAppSelector } from "../../store";
import Card from "../Card";
import Loading from "../Progress/Loading";
import "./map.style.css";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
  });

  if (!isLoaded) return <Loading />;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 40.76479, lng: 29.94347 }), []);
  const stopsData = useAppSelector((state) => state.stops.data);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      {stopsData &&
        stopsData.map((stop) => (
          <Marker
            key={stop.stop_id}
            position={{ lat: stop.stop_lat, lng: stop.stop_lon }}
            onClick={() => setSelectedLocation(stop)}
          />
        ))}

      {selectedLocation && (
        <InfoWindow
          position={{
            lat: selectedLocation.stop_lat,
            lng: selectedLocation.stop_lon,
          }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <Card selectedLocation={selectedLocation} />
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
