import styled from "styled-components"

const Container = styled.button`
  &:hover {
    background-color: #004add;
    border: 1px solid #004add;
    cursor: pointer;
    transition: 0.2s;
  }
  align-items: center;
  background-color: #004aad;
  border: 1px solid #004aad;
  border-radius: 5px;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: center;
  transition: 0.2s;
`

export { Container }
