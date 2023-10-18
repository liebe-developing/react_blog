import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import {
  ForgotPassword,
  Home,
  Login,
  PostsCategory,
  Profile,
  Register,
} from "./pages";
import { PrivateRoute } from "./components";
import { useQuery } from "@tanstack/react-query";
import apiClient from "./components/HttpCommon";

export default function App() {
  const {
    isLoading: isLoadingPosts,
    error: isErrorPosts,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await apiClient.get("/posts");
      const data = res?.data?.data?.posts;
      return data;
    },
  });

  const {
    // isLoading,
    // error,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await apiClient.get("/categories");
      const data = res?.data;
      return data;
    },
  });

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Home
              posts={posts}
              categories={categories}
              isLoadingPosts={isLoadingPosts}
              isErrorPosts={isErrorPosts}
            />
          }
        />
        <Route path="/category/:categoryName" element={<PostsCategory />} />
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
