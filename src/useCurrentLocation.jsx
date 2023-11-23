import { useState, useEffect } from 'react';

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

 async function currentLocation() {
      try {
        await new Promise(() => {
          navigator.geolocation.getCurrentPosition((position) => {
              const {latitude, longitude} = position.coords;
              setLocation({latitude, longitude});
            }
          );
        });
      } catch (error) {
        setError(error);
      }
    }

      useEffect(() => {
    currentLocation();
      }, []); 
  

  return {location,error };
}
