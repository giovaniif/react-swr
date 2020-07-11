import useSWR from 'swr';
import api from '../services/api';

export default function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data>(url, async url => {
    const { data } = await api.get(url);

    return data;
  });

  return { data, error, mutate };
}