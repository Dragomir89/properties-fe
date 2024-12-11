import { useEffect, useState } from 'react';
import { LanguageOption } from '@types';
import { getLanguages } from '@http';

type UseLanguages = [LanguageOption[], boolean];

const useLanguages = (): UseLanguages => {
  const [languages, setLanguages] = useState<LanguageOption[]>([]);
  const [loadingLanguages, setLoadinglanguages] = useState(true);

  useEffect(() => {
    getLanguages().then((res) => {
      setLoadinglanguages(false);
      setLanguages(res);
    });
  }, [getLanguages]);

  return [languages, loadingLanguages];
};

export default useLanguages;
