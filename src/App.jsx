import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { ForgotPassword, Home, Login, Profile, Register } from "./pages";
import { PrivateRoute } from "./components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const {
    // isLoading,
    // error,
    data: posts,
  } = useQuery({
    queryKey: "posts",
    queryFn: async () => {
      const res = await axios.get("/api/api/v1/posts");
      const data = res?.data?.data?.posts;
      return data;
    },
  });

  const {
    // isLoading,
    // error,
    data: categories,
  } = useQuery({
    queryKey: "categories",
    queryFn: async () => {
      const res = await axios.get("/api/api/v1/categories");
      const data = res?.data;
      return data;
    },
  });

  console.log(categories);
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home posts={posts} categories={categories} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
