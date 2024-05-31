// CharacteristicCard.jsx
import React from 'react';

const CharacteristicCard = ({ iconUrl, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={iconUrl} alt="Characteristic Icon" className="w-8 h-8 mb-2 text-orange-700" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default CharacteristicCard;
