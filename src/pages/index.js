import React from "react"
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 style={{ color: "red" }}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <img src="https://source.unsplash.com/random/600x400" alt="" />
    <p>Now go build something great.</p>
    <div>
      <Link to="/blog/my-first-post">My first Post</Link>
    </div>
    <Link to="/second_post">Second Post</Link>
  </div>
)

export default IndexPage