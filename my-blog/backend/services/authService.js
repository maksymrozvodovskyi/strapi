import axios from "axios";

const api = axios.create({
  baseURL: process.env.STRAPI_API,
});

export const registerUser = async (username, email, password) => {
  const { data } = await api.post("/auth/local/register", {
    username,
    email,
    password,
  });

  return data;
};

export const loginUser = async (identifier, password) => {
  const { data } = await api.post("/auth/local", {
    identifier,
    password,
  });

  return data;
};

export const getAuthUser = async (jwt) => {
  const { data } = await api.get("/users/me", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });

  return data;
};
