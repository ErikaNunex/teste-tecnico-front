import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const post = async <T>(url: string, data: T): Promise<AxiosResponse> => {
  const response = await api.post(url, data);
  return response;
};
export const get = async <T>(
  url: string,
  params?: Record<string, any>
): Promise<AxiosResponse<T>> => {
  const response = await api.get<T>(url, { params });
  return response;
};

export const patch = async <T>(
  url: string,
  data: T
): Promise<AxiosResponse> => {
  const response = await api.patch(url, data);
  return response;
};
