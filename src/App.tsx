import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./views/Home";
import PostPage from "./views/PostPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/create" element={<PostPage />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
