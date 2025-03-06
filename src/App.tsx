import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./views/Home";
import PostPage from "./views/PostPage";
import PostDetails from "./components/PostDetails";
import AddEditPost from "./views/AddEditPost";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/create" element={<AddEditPost />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
