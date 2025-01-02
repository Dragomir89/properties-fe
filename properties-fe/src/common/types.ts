export interface Option {
  id: number;
  name: string;
}

export interface OptionNeighborhood {
  id: number;
  name: string;
  cityId: number;
}

export interface LanguageOption {
  id: number;
  languageName: string;
}

export interface RegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confurmPassword: string;
  gender: string;
  phoneNumber: string;
  languages: string[];
}

export interface AddPropertyFormMenus {
  cities: Array<Option>;
  neighborhoods: Array<OptionNeighborhood>;
  propertyTypes: Array<Option>;
  constructionTypes: Array<Option>;
  heatingTypes: Array<Option>;
  furnitureLevels: Array<Option>;
}

export interface AddPropertyFormValues {
  city: string;
  neighborhood: string;
  propertyType: string;
  constructionType: string;
  heatingType: string;
  animalsAllowed: string;
  floor: string;
  yearOfBuilding: string;
  price: string;
  yardArea: string;
  area: string;
  furnitureLevel: string;
  description: string;
}
