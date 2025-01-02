import { atom } from 'jotai';

interface location {
  lat: number;
  lng: number;
  address: string;
}

export const locationAtom = atom<location>();
