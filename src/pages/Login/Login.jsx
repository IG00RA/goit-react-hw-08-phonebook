import { LoginForm } from 'components/LoginForm/LoginForm';

import LoginImg from '../../img/login.png';
import { LoginImage } from './Login.styled';
import { RegisterImgWrap } from 'pages/Register/Register.styled';

export default function Login() {
  return (
    <div>
      <title>Login</title>
      <LoginForm />
      <RegisterImgWrap>
        <LoginImage src={LoginImg} alt="Phonebook" />
      </RegisterImgWrap>
    </div>
  );
}
