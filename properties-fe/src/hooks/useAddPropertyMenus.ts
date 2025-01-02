import { getProprtyMenusOptions } from '@http';
import { AddPropertyFormMenus } from '@types';
import { useEffect, useState } from 'react';

const useAddPropertyMenus = (): [AddPropertyFormMenus, boolean] => {
  const [propertyMenus, setPropertyMenus] =
    useState<AddPropertyFormMenus>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProprtyMenusOptions().then((res) => {
      setPropertyMenus(res);
      setLoading(false);
    });
  }, [getProprtyMenusOptions]);

  return [propertyMenus, loading];
};

export default useAddPropertyMenus;
