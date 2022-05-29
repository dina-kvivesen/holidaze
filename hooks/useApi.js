import axios from 'axios';
import { BASE_URL } from '../constants/api';
import useSWR from 'swr';
import { getToken } from '../hooks/useLocalStorage';


export function getStrapiURL(path = '') {
  return BASE_URL + path;
}

export function getAdminData(path) {
  const [token, setToken] = getToken();
  const url = getStrapiURL(path);

  const getWithToken = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => res.data.data);

  const { data, error } = useSWR(token ? url : null, getWithToken, {
    refreshInterval: 5000,
  });

  return { data, error };
}
