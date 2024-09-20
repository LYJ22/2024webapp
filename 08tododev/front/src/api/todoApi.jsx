import axios from "axios";

const API_SERVER_HOST = "http://localhost:8081";
const perfix = `${API_SERVER_HOST}/api/todo`;

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${perfix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

export const getOne = async (tno) => {
  const res = await axios.get(`${perfix}/${tno}`);
  return res.data;
};

export const postAdd = async (obj) => {
  const res = await axios.post(`${perfix}/`, obj);
  return res.data;
};
