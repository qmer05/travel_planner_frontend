import styled from "styled-components";

const Countries = ({ countries }) => {
  return (
    <Container>
      {countries.map((country) => (
        <CountryCard key={country.id}>
          <Flag src={country.flagPng} alt={`${country.name} flag`} />
          <CountryName>{country.name}</CountryName>
          <CountryDetails>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
            <p><strong>Languages:</strong> {country.languages.join(", ")}</p>
            <p><strong>Currencies:</strong> {country.currencies.join(", ")}</p>
            <p><strong>Borders:</strong> {country.borders.join(", ") || "None"}</p>
            <MapLink href={country.googleMaps} target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </MapLink>
          </CountryDetails>
        </CountryCard>
      ))}
    </Container>
  );
};

export default Countries;

// Styled components
const Container = styled.div`
  background-color: #f4f4f9;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CountryCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const Flag = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const CountryName = styled.h2`
  margin: 10px 0;
  font-size: 1.5em;
  color: #333;
`;

const CountryDetails = styled.div`
  text-align: left;
  margin-top: 10px;

  p {
    margin: 5px 0;
    font-size: 0.9em;
    color: #555;
  }
`;

const MapLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9em;

  &:hover {
    background-color: #0056b3;
  }
`;