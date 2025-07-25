
import React, { useState } from 'react';
import PlacesSection from '../components/PlaceScreens';

const ReligiousPlaces = () => {
  const [searchValue, setSearchValue] = useState('');
  
  const data = [
    { image: require('../../assets/images/baytna.jpg'),name:'jbeil' ,id:'1'},//replace the id with the real id
 
    // More images
  ];

  const handleDiscover = () => {
    console.log('Discover clicked');
  };

  const handleSave = () => {
    console.log('Save clicked');
  };

  return (
    <PlacesSection
      title="Religious Places"
      headerColor="#9a370e"
      headerImage={require('../../assets/images/religious.png')}
      data={data}
      onDiscover={handleDiscover}
      onSave={handleSave}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
    />
  );
};

export default ReligiousPlaces;
