import React from 'react';
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  SearchControl,
  TrafficControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps';

const Maps = () => {
  return (
    <YMaps>
      <Map
        className='map'
        defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
      >
        <TypeSelector />
        <FullscreenControl />
        <GeolocationControl />
        <TrafficControl />
        <ZoomControl />
        <SearchControl />
        <Placemark
          geometry={[55.684758, 37.738521]}
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        />
      </Map>
    </YMaps>
  );
};

export default Maps;
