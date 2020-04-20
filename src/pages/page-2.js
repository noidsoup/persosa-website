import React from "react"
import { Link } from "gatsby"

import App from "../components/App"
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/seo"

const SecondPage = () => (
  <App>
    <SEO title="Page two" />
    <Navigation />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer />
  </App>
)

export default SecondPage
