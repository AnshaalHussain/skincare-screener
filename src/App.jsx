import "./App.css";
import Input from "./components/Input";
import styled from "styled-components";

function App() {
  return (
    <div>
      <AppTitle>Skincare Screener</AppTitle>
      <SearchContainer>
        <Input />
      </SearchContainer>
    </div>
  );
}

export default App;

const AppTitle = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 2.1;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
`;

const SearchContainer = styled.div`
  padding: 0 1em;
  margin: 0 1rem;
`;
