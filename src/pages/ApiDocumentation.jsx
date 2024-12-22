import styled from "styled-components";

const ApiDocumentation = () => {
  return (
    <Container>
      <Title>API Documentation</Title>
      <Introduction>
        <p>
          The <strong>Travel Planner API</strong> provides information about
          countries, including details such as currency, capital, language,
          borders, population, and more. It is intended for developers or anyone
          needing structured data about countries.
        </p>
        <p>
          <strong>Authentication:</strong> No API key is required, but some
          endpoints require a token (e.g., <em>user</em> or <em>admin</em>{" "}
          roles).
        </p>
        <p>
          <strong>Base URL:</strong>{" "}
          <a
            href="https://travelplannerapi.omertech.dk/api/countries"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://travelplannerapi.omertech.dk/api/countries
          </a>
        </p>
      </Introduction>

      <Section>
        <Subtitle>Endpoints</Subtitle>
        <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Path</th>
              <th>HTTP Method</th>
              <th>Description</th>
              <th>Authentication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>/api/countries</code>
              </td>
              <td>GET</td>
              <td>Retrieve information about all countries.</td>
              <td>None</td>
            </tr>
            <tr>
              <td>
                <code>/api/countries/:id</code>
              </td>
              <td>GET</td>
              <td>Retrieve information about a specific country by ID.</td>
              <td>Admin token required</td>
            </tr>
            <tr>
              <td>
                <code>/api/countries</code>
              </td>
              <td>POST</td>
              <td>Add a new country.</td>
              <td>Admin token required</td>
            </tr>
            <tr>
              <td>
                <code>/api/countries/:id</code>
              </td>
              <td>PUT</td>
              <td>Update an existing country by ID.</td>
              <td>Admin token required</td>
            </tr>
            <tr>
              <td>
                <code>/api/countries/:id</code>
              </td>
              <td>DELETE</td>
              <td>Delete a country by ID.</td>
              <td>Admin token required</td>
            </tr>
          </tbody>
        </Table>
        </TableWrapper>
      </Section>

      <Section>
        <Subtitle>Example Response</Subtitle>
        <CodeBlock>
          {`
[
    {
        "id": 39,
        "name": "Norway",
        "currencies": ["Norwegian krone"],
        "capital": "Oslo",
        "languages": ["Norwegian Nynorsk", "Norwegian Bokmål", "Sami"],
        "borders": ["FIN", "SWE", "RUS"],
        "area": 323802,
        "googleMaps": "https://goo.gl/maps/htWRrphA7vNgQNdSA",
        "population": 5379475,
        "flagPng": "https://flagcdn.com/w320/no.png"
    }
]
                    `}
        </CodeBlock>
      </Section>

      <Section>
        <Subtitle>Status Codes</Subtitle>
        <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>Status Code</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>200</td>
              <td>Success - Data retrieved successfully.</td>
            </tr>
            <tr>
              <td>401</td>
              <td>Error - Unauthorized (token missing or invalid).</td>
            </tr>
            <tr>
              <td>403</td>
              <td>Error - Forbidden (insufficient permissions).</td>
            </tr>
            <tr>
              <td>404</td>
              <td>Error - Resource not found.</td>
            </tr>
            <tr>
              <td>500</td>
              <td>Error - Internal server error.</td>
            </tr>
          </tbody>
        </Table>
        </TableWrapper>
      </Section>
    </Container>
  );
};

export default ApiDocumentation;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Introduction = styled.div`
  font-size: 1rem;
  color: #555;
  max-width: 600px;
  line-height: 1.6;
  text-align: left;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  margin-bottom: 30px;
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Enable horizontal scrolling */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  margin-bottom: 20px;
  min-width: 600px; /* Ensure the table maintains a readable layout on small screens */

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f4f4f9;
    color: #333;
    font-weight: bold;
  }

  td {
    color: #555;
  }
`;

const CodeBlock = styled.pre`
  background-color: #f8f8f8;
  color: #333;
  font-size: 0.9rem;
  line-height: 1.4;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
  max-width: 100%;
`;
