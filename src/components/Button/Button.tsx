import React from "react"
import { Container } from "./Button.style"

const Button = ({ onClick, children }) => {
  return <Container onClick={onClick}>{children}</Container>
}

export default Button
