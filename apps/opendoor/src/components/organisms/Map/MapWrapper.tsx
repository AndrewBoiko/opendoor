import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from 'react-leaflet';

type MapWrapperProps = {
  selecteCoords: [number, number] | null;
};

function LocationMarker() {
  const [position, setPosition] = useState<null | L.LatLng>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function FlyToMarker({ coords }: { coords: [number, number] | null }) {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 13);
    }
  }, [coords, map]);

  return null;
}

export const MapWrapper = ({ selecteCoords }: MapWrapperProps) => {
  return (
    <Container style={{ padding: 0, margin: 0, maxWidth: '100%' }}>
      <MapContainer
        center={selecteCoords || [51.505, -0.09]}
        zoom={13}
        style={{ height: 'calc(100vh - 72px)', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
        <FlyToMarker coords={selecteCoords} />
      </MapContainer>
    </Container>
  );
};
//
