import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./layouts/Mainlayout";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin";
import SignUpPage from "./pages/SignUpPage";
import ApiDocumentation from "./pages/ApiDocumentation";
import facade from "./util/apiFacade";
import Error404NotFound from "./components/Error404NotFound";

function App() {
  const [countries, setCountries] = useState([]);
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn()); // Set initial state based on token

  const urlCountries = "https://travelplannerapi.omertech.dk/api/countries";

  // Fetch countries data when the component mounts
  useEffect(() => {
    fetch(urlCountries)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching trips:", error));
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />{" "}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/countries" element={<Countries countries={countries}/>} />
        <Route path="/admin" element={<Admin countries={countries} setCountries={setCountries} />} />
        <Route path="/api-documentation" element={<ApiDocumentation/>} />
        <Route path="*" element={<Error404NotFound/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
