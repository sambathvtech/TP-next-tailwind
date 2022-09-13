import { getCMSDomain, getDomain } from '@utilities/dev';

const convertObjectToString = (obj) => {
  let newString = `?sites.domain=${getDomain()}`;
  const keys = Object.keys(obj);
  if (keys.length > 0) {
    keys.map((key) => {
      newString += `&${key}=${obj[key]}`;
      return null;
    });
  }

  return newString;
};

export const fetchDataByGet = (url, params = {}) => {
  const newParams = convertObjectToString(params);

  return `${getCMSDomain()}${url}${newParams}`;
};

export const fetchImage = (url) => {
  return `${getCMSDomain()}${url}`;
};

export const requestInit = (body, method = 'POST') => {
  return {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'fr-FR,fr;q=0.9,en;q=0.8',
      'content-type': 'application/json;charset=UTF-8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    referrerPolicy: 'strict-origin-when-cross-origin',
    method,
    body: JSON.stringify(body),
    mode: 'cors',
  };
};

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
