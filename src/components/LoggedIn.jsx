import { useState, useEffect } from "react";
import facade from "../util/apiFacade";

function LoggedIn({ loggedIn }) {
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    facade.fetchDataCountries().then((data) => {
      setDataFromServer(data);
    });
  }, []);

  return (
    <div>
      <h2>You're now logged in as:</h2>
      {facade.hasUserAccess("admin", loggedIn) ? <p>Admin</p> : <p>User</p>}
    </div>
  );
}

export default LoggedIn;