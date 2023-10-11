import React, { useState } from 'react';

function NewPlantForm() {
  const [plantData, setPlantData] = useState({
    name: '',
    imageUrl: '',
    sunExposure: '',
    soilType: '',
    bloomTime: '',
    flowerColor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setPlantData({
      name: '',
      imageUrl: '',
      sunExposure: '',
      soilType: '',
      bloomTime: '',
      flowerColor: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={plantData.name}
        onChange={handleChange}
        placeholder="Plant Name"
        required
      />
      <input
        type="text"
        name="imageUrl"
        value={plantData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;