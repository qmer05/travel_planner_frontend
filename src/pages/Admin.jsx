import { useState } from "react";
import styled from "styled-components";
import facade from "../util/apiFacade";

const Admin = ({ countries, setCountries }) => {
  
  const [editingCountryId, setEditingCountryId] = useState(null);
  const [updateFields, setUpdateFields] = useState({});
  const [newCountry, setNewCountry] = useState({
    name: "",
    capital: "",
    population: 0,
    area: 0,
    languages: "",
    currencies: "",
    borders: "",
    flagPng: "",
    googleMaps: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCountry({
      ...newCountry,
      [name]: ["languages", "currencies", "borders"].includes(name)
        ? value.split(",").map((v) => v.trim()) // Split strings into arrays
        : name === "population" || name === "area"
        ? Number(value) // Convert to numbers
        : value, // Default for other fields
    });
  };

  const handleAddCountry = () => {
    if (!newCountry.name || !newCountry.capital) {
      alert("Name and Capital are required fields!");
      return;
    }
    console.log("Submitting New Country:", newCountry);
    facade
      .createCountry(newCountry)
      .then((created) => {
        console.log("Created Country Response:", created);
        setCountries([...countries, created]);
        setNewCountry({
          name: "",
          capital: "",
          population: 0,
          area: 0,
          languages: "",
          currencies: "",
          borders: "",
          flagPng: "",
          googleMaps: "",
        });
      })
      .catch((err) => {
        console.error("Create Country Error:", err);
      });
  };

  const handleUpdateCountry = (id, updatedFields) => {
    console.log("Updated Fields Sent to API:", updatedFields);

    facade
      .updateCountry(id, updatedFields)
      .then(() => {
        setCountries((prevCountries) =>
          prevCountries.map((country) =>
            country.id === id ? { ...country, ...updatedFields } : country
          )
        );
      })
      .catch((err) => console.error("Update Country Error:", err));
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFields({
      ...updateFields,
      [name]: ["languages", "currencies", "borders"].includes(name)
        ? value.split(",").map((v) => v.trim()) // Ensure it's converting to an array
        : value,
    });
  };

  const startEditingCountry = (id, currentData) => {
    setEditingCountryId(id);
    setUpdateFields(currentData); // Pre-fill the form with existing data
  };

  const cancelEditing = () => {
    setEditingCountryId(null);
    setUpdateFields({});
  };

  const handleDeleteCountry = async (id) => {
    try {
      await facade.deleteCountry(id);
      const data = await facade.fetchDataCountries();
      setCountries(data);
    } catch (error) {
      console.error("Error deleting or fetching countries:", error);
      const data = await facade.fetchDataCountries();
      setCountries(data);
    }
  };

  return (
    <Container>
      <h1>Admin Panel</h1>
      {facade.hasUserAccess("admin", true) ? (
        <>
          <h2>Create a new Country</h2>
          <Form>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={newCountry.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Capital</label>
              <input
                type="text"
                name="capital"
                value={newCountry.capital}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Population</label>
              <input
                type="number"
                name="population"
                value={newCountry.population}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Area (km²)</label>
              <input
                type="number"
                name="area"
                value={newCountry.area}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Languages (comma-separated)</label>
              <input
                type="text"
                name="languages"
                value={newCountry.languages}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Currencies (comma-separated)</label>
              <input
                type="text"
                name="currencies"
                value={newCountry.currencies}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Borders (comma-separated ISO codes)</label>
              <input
                type="text"
                name="borders"
                value={newCountry.borders}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Flag URL</label>
              <input
                type="text"
                name="flagPng"
                value={newCountry.flagPng}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Google Maps URL</label>
              <input
                type="text"
                name="googleMaps"
                value={newCountry.googleMaps}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={handleAddCountry}>
              Add Country
            </button>
          </Form>

          <h2>Existing Countries</h2>
          {countries.map((country) => (
            <CountryCard key={country.id}>
              {editingCountryId === country.id ? (
                <>
                  <h3>Editing {country.name}</h3>
                  <Form>
                    <div>
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={updateFields.name}
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Capital</label>
                      <input
                        type="text"
                        name="capital"
                        value={updateFields.capital}
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Population</label>
                      <input
                        type="number"
                        name="population"
                        value={updateFields.population}
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Area (km²)</label>
                      <input
                        type="number"
                        name="area"
                        value={updateFields.area}
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Languages (comma-separated)</label>
                      <input
                        type="text"
                        name="languages"
                        value={updateFields.languages.join(", ")} // Convert array to comma-separated string
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Currencies (comma-separated)</label>
                      <input
                        type="text"
                        name="currencies"
                        value={updateFields.currencies.join(", ")} // Convert array to comma-separated string
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Borders (comma-separated ISO codes)</label>
                      <input
                        type="text"
                        name="borders"
                        value={updateFields.borders.join(", ")} // Convert array to comma-separated string
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Flag URL</label>
                      <input
                        type="text"
                        name="flagPng"
                        value={updateFields.flagPng}
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <label>Google Maps URL</label>
                      <input
                        type="text"
                        name="googleMaps"
                        value={updateFields.googleMaps}
                        onChange={handleUpdateInputChange}
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          handleUpdateCountry(country.id, updateFields);
                          cancelEditing();
                        }}
                      >
                        Save
                      </button>
                      <button type="button" onClick={cancelEditing}>
                        Cancel
                      </button>
                    </div>
                  </Form>
                </>
              ) : (
                <>
                  <h3>{country.name}</h3>
                  <p>Capital: {country.capital}</p>
                  <p>Population: {country.population.toLocaleString()}</p>
                  <p>Area: {country.area.toLocaleString()} km²</p>
                  <p>Languages: {country.languages.join(", ")}</p>
                  <p>Currencies: {country.currencies.join(", ")}</p>
                  <p>Borders: {country.borders.join(", ")}</p>
                  <p>Flag URL: {country.flagPng}</p>
                  <p>Google Maps URL: {country.googleMaps}</p>
                  <button
                    onClick={() => startEditingCountry(country.id, country)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDeleteCountry(country.id)}>
                    Delete
                  </button>
                </>
              )}
            </CountryCard>
          ))}
        </>
      ) : (
        <p1>You do not have permission to enter this site</p1>
      )}
    </Container>
  );
};

export default Admin;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 500px;
  width: 100%;
  align-items: flex-start;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    width: 100%;
    font-size: 1rem;
    border-radius: 5px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #ddd;
  margin-top: 15px;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    margin: 5px 0;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
