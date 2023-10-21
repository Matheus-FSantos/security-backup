/* Router DOM */
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/contact">Go to Contact page</Link>
    </div>
  )
}
