import React from "react";
import axios from "axios";
import Cookies from "./Cookies";

export default function Auth() {
  const token = Cookies.getItem("token");
  const http = axios.create({
    baseURL: "https://crossfireapi.herokuapp.com/api",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    http,
  };
}
