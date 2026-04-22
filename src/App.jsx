import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation";
import SignIn from "./routes/sign-in/SIgnIn";

function Shop() {
  return <h1>I am a shop</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
