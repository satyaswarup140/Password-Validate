// Write your code here
import {useState} from 'react'
import {
  PasswordValidatorContainer,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const handleChange = e => {
    setPassword(e.target.value)
  }

  return (
    <PasswordValidatorContainer>
      <h1 style={{fontFamily: 'Roboto'}}>Password Validator</h1>
      <p>Check how strong and secure is your password</p>
      <PasswordInput
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      {password.length < 8 && (
        <ErrorMessage>Your password must be at least 8 characters</ErrorMessage>
      )}
      {password.length >= 8 && (
        <ErrorMessage>Your password must be at least 8 characters</ErrorMessage>
      )}
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
