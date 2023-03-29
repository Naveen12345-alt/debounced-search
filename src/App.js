import "./styles.css";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div className="App">
      <header style={{ display: "flex", gap: "20px", backgroundColor: "pink" }}>
        <h3>Amazon</h3>
        <h3>Flipkart</h3>
        <h3>Apple</h3>
        <SearchBar />
      </header>
    </div>
  );
}

// header bar ecommerce
