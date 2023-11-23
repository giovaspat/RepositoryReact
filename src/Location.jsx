import { useCurrentLocation } from './useCurrentLocation';

export function Location() {
  const {location} = useCurrentLocation();

  return (
    <div>
      <h2>Current Location</h2>
      {location && (<p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>)}
    </div>
  );
}
