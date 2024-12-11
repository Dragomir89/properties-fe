import { LanguageOption, RegistrationFormValues } from 'src/common/types';

export const getLangiageIds = (selectedLanguages, languages): number[] => {
  const idArray = selectedLanguages
    .map((str) => {
      const match = languages.find((obj) => obj.languageName === str);
      return match ? match.id : null;
    })
    .filter((id) => id !== null);
  return idArray;
};

export const prepareRegistrationData = (
  data: RegistrationFormValues,
  allLanguages: LanguageOption[]
) => {
  const reqData = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    gender: data.gender,
    phoneNumber: data.phoneNumber,
    languages: getLangiageIds(data.languages, allLanguages),
  };

  return reqData;
};
