// src/components/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  console.log('Category: ', category);
  const places = {
    temples: [
      {
        name: 'Meenakshi Temple',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-23456789',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
      {
        name: 'Venkata Pillar Temple',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-34567890',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
      {
        name: 'Raja Bhavan Temple',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-45678901',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
    ],
    cafe: [
      {
        name: 'The Cafe',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-56789012',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
      {
        name: 'The Foodie',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-67890123',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
      {
        name: 'The Coffee Shop',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-78901234',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
    ],
    food: [
      {
        name: 'Thai Cuisine',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-89012345',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
      {
        name: 'Indian Cuisine',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-90123456',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
      {
        name: 'Mexican Cuisine',
        location: 'Madurai, Tamil Nadu',
        phoneNumber: '044-12345678',
        mapsLink: 'https://maps.app.goo.gl/pAULEgava4We9J7c7',
      },
    ],
  };

  if (!category || !places[category]) {
    return (
      <div>
        <h1
          className="text-red-500 text-center
        mt-7
        "
        >
          Category not found.{' '}
        </h1>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1
        className="text-2xl font-bold mb-4 text-center
      text-gray-800 mr-6"
      >
        Collection of {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <ul className="space-y-4 flex gap-8">
        {places[category].map((place, index) => (
          <li
            key={index}
            className="w-full  text-gray-700 px-10 py-6
            rounded-full border-gray-950
            border-2 border-transparent transition duration-300 hover:border-y-yellow-300 hover:border-x-yellow-800
            overflow-hidden flex items-center gap-4 "
          >
            <div className="">
              <h2 className="text-xl font-semibold">{place.name}</h2>
              <p>Category: {category}</p>
              <p>Location: {place.location}</p>
              <p>
                Phone Number:{' '}
                {place.phoneNumber ? (
                  place.phoneNumber
                ) : (
                  <h3>Phone number not foun</h3>
                )}
              </p>
              <p>
                Maps Location:
                {place.mapsLink ? (
                  <a
                    className="text-blue-500 hover:underline"
                    href={place.mapsLink}
                    target="_blank"
                    rel="noopener "
                  >
                    View on Google Maps
                  </a>
                ) : (
                  <h3>Maps location not found</h3>
                )}
              </p>
            </div>
          </li>
        )) || <li>No places found for this category.</li>}
      </ul>
    </div>
  );
};

export default CategoryPage;
