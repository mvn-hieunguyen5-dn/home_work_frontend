import { api } from "../api";

export const apiProductGetList = () => {
  return api.get("/products",);
};
export const apiProductGetDetail = (data) => {
  return api.get(`/products/${data}`);
};

