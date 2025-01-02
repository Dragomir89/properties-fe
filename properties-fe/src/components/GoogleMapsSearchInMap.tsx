import React, { useEffect, useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { TextField } from '@mui/material';
import { locationAtom } from 'src/atoms';
import { useSetAtom } from 'jotai';
import keys from '../keys';

const GoogleMapsSearchInMap = () => {
  const setLocationAtom = useSetAtom(locationAtom);
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2000);

    return () => clearTimeout(timer); // Изчистване на таймера при демонтиране
  }, [setShowComponent]);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: 42.6977,
    lng: 23.3219,
  }); // София, като начална точка
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: keys.googleMapsApiKey, // Заменете с вашия API ключ
    libraries: ['places'],
  });

  const handleSelect = async (value: string) => {
    setAddress(value);
    try {
      const geocoder = new window.google.maps.Geocoder();
      const response = await geocoder.geocode({ address: value });

      if (response.results[0]) {
        const location = response.results[0].geometry.location;

        const locationObj = {
          lat: location.lat(),
          lng: location.lng(),
          address: value,
        };
        setLocationAtom(locationObj);

        setCoordinates({
          lat: location.lat(),
          lng: location.lng(),
        });
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  if (!coordinates) return <div>Fetching your location...</div>;

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              style={{ width: '100%' }}
              {...getInputProps({
                label: 'Въведете адрес',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                    key={suggestion.placeId}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div style={{ height: '400px', width: '100%', marginTop: '20px' }}>
        <GoogleMap
          zoom={14}
          center={coordinates}
          mapContainerStyle={{ width: '100%', height: '100%' }}>
          {showComponent && <Marker position={coordinates} />}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapsSearchInMap;
