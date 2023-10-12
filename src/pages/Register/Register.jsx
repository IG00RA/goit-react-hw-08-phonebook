import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import RegisterImg from '../../img/registration.png';
import { RegisterImage, RegisterImgWrap } from './Register.styled';

export default function Register() {
  return (
    <div>
      <title>Registration</title>
      <RegisterForm />
      <RegisterImgWrap>
        <RegisterImage src={RegisterImg} alt="Phonebook" />
      </RegisterImgWrap>
    </div>
  );
}
