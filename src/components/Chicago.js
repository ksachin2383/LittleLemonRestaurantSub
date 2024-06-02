import { useNavigate  } from "react-router-dom"

export default function Chicago() {
  const navigate = useNavigate();

return (
    <div className="headerSummary">
    <h1 className="pageTitle">Little Lemon</h1>
    <h3 className="subPageTitle">Chicago</h3>

    <div className="titleDesc">
      <p>We are a family owned</p>
      <p>Mediterranean restaurant,</p>
      <p>focused on traditional</p>
      <p>recipes served with a modern</p>
      <p>twist.</p>
    </div>

    <button type="button" className="siteButton" aria-label="Reserve a Table" onClick={() => {
        navigate("/booking")
      }}>
      Reserve a Table
    </button>
  </div>
)
}