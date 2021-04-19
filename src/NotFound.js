import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Upss...</h2>
      <h3>That page con not be found</h3>
      <Link to="/">Back to the HomePage..</Link>
    </div>
  )
}

export default NotFound;
