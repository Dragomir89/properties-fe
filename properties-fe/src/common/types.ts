export interface Option {
  id: number;
  name: string;
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
