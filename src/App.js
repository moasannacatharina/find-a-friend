import React, { useState } from "react";
import "./App.css";
import Typography from "@mui/material/Typography";
import Layout from "./components/Layout";
import Button from "./components/Button";
import UserCard from "./components/UserCard";
import Loading from "./components/LoadingAnim/Loading";
import { AnimatePresence } from "framer-motion";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchUserData = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.results);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.error("Couldn't fetch user", err);
        setLoading(false);
        setError(true);
        return null;
      });
  };
  return (
    <div className="App">
      <Layout>
        {!loading && !userData && <h1>Find a friend</h1>}
        {loading && <Loading />}
        <AnimatePresence>
          {userData && !loading && <UserCard userData={userData} />}
        </AnimatePresence>
        <Button onClick={fetchUserData}>Click here</Button>
        {error && (
          <Typography variant="h4" component="h1" sx={{ color: "error.main" }}>
            something went wrong :(
          </Typography>
        )}
      </Layout>
    </div>
  );
}

export default App;
