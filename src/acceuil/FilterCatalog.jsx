
import React from 'react';

const filters = [
  { name: 'Beach', icon: '🏖️' },
  { name: 'Windmills', icon: '🌬️' },
  { name: 'Modern', icon: '🏙️' },
  { name: 'Countryside', icon: '🌄' },
  { name: 'Pools', icon: '🏊' },
  { name: 'Islands', icon: '🏝️' },
  { name: 'Lake', icon: '🌊' },
  { name: 'Skiing', icon: '⛷️' },
  { name: 'Castles', icon: '🏰' },
  { name: 'Caves', icon: '🕳️' },
  { name: 'Camping', icon: '🏕️' },
  { name: 'Arctic', icon: '❄️' },
  { name: 'Desert', icon: '🏜️' },
  { name: 'Barns', icon: '🏚️' },
  { name: 'Lux', icon: '💎' },
];

const FilterCatalog = ({ onFilterSelect }) => {
  return (
    <div className="filter-catalog">
      {filters.map((filter) => (
        <div key={filter.name} className="filter-item" onClick={() => onFilterSelect(filter.name)}>
          <span className="filter-icon">{filter.icon}</span>
          <span className="filter-name">{filter.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterCatalog;
