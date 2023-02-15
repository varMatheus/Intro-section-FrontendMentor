import { atom } from 'recoil';

export const featureAtiva = atom<boolean> ({
  key: 'featureAtiva',
  default: false
});

export const companyAtiva = atom<boolean> ({
  key: 'companyAtiva',
  default: false
});

export const featureAtivaMobile = atom<boolean> ({
  key: 'featureAtivaMobile',
  default: false
});

export const companyAtivaMobile = atom<boolean> ({
  key: 'companyAtivaMobile',
  default: false
});

export const menuLateralAtiva = atom<boolean> ({
  key: 'menuLateralAtiva',
  default: false
});
