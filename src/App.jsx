import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Authentication from "./routes/authentication/Authentication";

function Shop() {
  return <h1>I am a shop</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
