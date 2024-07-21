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
