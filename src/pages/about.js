import { Container } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { Link } from "gatsby"
import React from "react"
import Carousel from "react-gallery-carousel"
import "react-gallery-carousel/dist/index.css"

const AboutPage = () => {
  const images = [900, 800, 700, 600, 500].map(size => ({
    src: `https://placedog.net/${size}/${size}`,
  }))

  return (
    <div>
      <h1>About page</h1>
      <Link to="/">back to home</Link>
      <br />
      <Link to="/persons">view persons</Link>
      <Container>Hello there ! customers</Container>
    </div>
  )
}

export default AboutPage
