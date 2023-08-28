import { Link } from "react-router-dom";

const GoToHomeStyle = {
  border: "1px solid blue",
  color: "blue",
  padding: "5px 10px",
  borderRadius: "15px",
};

const NotFound = () => {
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "150px", fontWeight: "bold" }}>404</span>
        <p
          style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "15px" }}
        >
          Page Not Found!
        </p>
        <Link style={GoToHomeStyle} to="/">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
