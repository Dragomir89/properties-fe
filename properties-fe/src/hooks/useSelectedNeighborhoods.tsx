import { Option } from '@types';
import { useEffect, useState } from 'react';

const useSelectedNeighborhoods = (
  whachedCities,
  neighborhoods
): [Option[], boolean] => {
  const [isDisabledNeighborhoods, setIsDisabledNeighborhoods] = useState(true);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState([]);

  useEffect(() => {
    const cityId = whachedCities;
    if (cityId !== '') {
      setIsDisabledNeighborhoods(false);
      const selectedNeighborhoods = neighborhoods.filter(
        (n) => n.cityId + '' === cityId + ''
      );
      setSelectedNeighborhoods(selectedNeighborhoods);
    }
  }, [whachedCities]);

  return [selectedNeighborhoods, isDisabledNeighborhoods];
};

export default useSelectedNeighborhoods;
