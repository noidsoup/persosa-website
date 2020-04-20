import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container';

import "./App.scss"

const App = ({ children }) => {
  return (
    <>
      <Container fluid>
        <main>{children}</main>
      </Container>
    </>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
