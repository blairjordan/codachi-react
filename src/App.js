import "./App.css"
export default function App() {
  return (
    <div className="flex-container">
      <div className="row">
        <img
          className="flex-item"
          src="logo.png"
          alt="Codachi"
          style={{ height: "100px" }}
        />
      </div>
      <div className="row">
        <p id="download-link">
          <a href="https://marketplace.visualstudio.com/items?itemName=Pegleg.codachi">Download Extension</a>
        </p>
      </div>
    </div>
  )
}
