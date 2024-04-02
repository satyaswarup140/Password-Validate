// Style your elements here
import styled from 'styled-components'

export const PasswordValidatorContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #24263c;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #434451;
  color: #f8fafc;
  max-width: 400px;
  margin: 0 auto;
`

export const PasswordInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #475569;
  border-radius: 5px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #ef4444;
    box-shadow: 0 0 5px #ef4444;
  }
`

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #475569;
  border-radius: 5px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  margin-top: 5px;
  font-size: 14px;
`
