import React, { useMemo } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import useSearchModal from '@/hooks/useSearchModal';
import useCountries from '@/hooks/useCountries';

const SearchBar = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params.get('locationValue');
  const startDate = params.get('startDate');
  const endDate = params.get('endDate');
  const guestCount = params.get('guestCount');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue)?.label;
    }
    return 'Anywhere';
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      let diff = (end - start) / (1000 * 60 * 60 * 24);
      if (diff === 0) diff = 1;
      return `${diff} Days`;
    }
    return 'Any Week';
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }
    return 'Add Guests';
  }, [guestCount]);

  return (
    <div onClick={searchModal.onOpen} className="search-bar">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-x flex-1 text-center">{durationLabel}</div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className="hidden sm:block">{guestLabel}</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
