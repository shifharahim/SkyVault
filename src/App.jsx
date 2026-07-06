import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Welcome from "./pages/Welcome/Welcome";

function PlaceholderPage({ title }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#f8faff",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "#1e1b4b",
            marginBottom: "12px",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            color: "#64748b",
          }}
        >
          This page will be built in the next Milestone 1 package.
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route
          path="/login"
          element={<PlaceholderPage title="SkyVault Login" />}
        />

        <Route
          path="/register"
          element={
            <PlaceholderPage title="Create Your SkyVault Account" />
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;