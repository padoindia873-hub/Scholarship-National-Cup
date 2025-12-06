// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://quiz-backend-aixd.onrender.com/api",
//   headers: { "Content-Type": "application/json" },
// });

// // STUDENT REGISTER
// export const registerStudent = (data) =>
//   API.post("/auth/register", { ...data, userType: "STUDENT" });

// // ADMIN REGISTER (secret code required)
// export const createAdmin = (data) =>
//   API.post("/auth/register", {
//     ...data,
//     userType: "ADMIN",
//     adminSecretCode: data.adminSecretCode,
//   });

// // SUPER ADMIN REGISTER (secret code required)
// export const createSuperAdmin = (data) =>
//   API.post("/auth/register", {
//     ...data,
//     userType: "SUPER_ADMIN",
//     adminSecretCode: data.adminSecretCode,
//   });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL: "https://quiz-backend-aixd.onrender.com/api",
});

// STUDENT REGISTER (FORMDATA)
export const registerStudent = (data) =>
  API.post("/auth/register", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// ADMIN
export const createAdmin = (data) =>
  API.post("/auth/register", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// SUPER ADMIN
export const createSuperAdmin = (data) =>
  API.post("/auth/register", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export default API;
