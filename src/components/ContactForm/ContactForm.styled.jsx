import { ErrorMessage } from 'formik';
import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrapper = styled.div`
  margin-bottom: 10px;
  padding: 40px 30px;

  height: auto;
  width: 40%;
  border-radius: 12px;
  box-shadow: 12px 12px 20px rgba(0, 0, 0, 0.32),
    -13px -8px 20px 0px rgba(84, 46, 197, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
`;

export const InputStyled = styled(Field)`
  margin: 10px 0;
  padding: 10px;

  width: 100%;
  border: none;
  border-radius: 8px;
  background: none;
  box-shadow: inset 6px 6px 8px rgba(0, 0, 0, 0.32),
    inset -7px -7px 14px 0px rgba(84, 56, 197, 0.2);
  font-size: 18px;
  color: white;
  outline: none;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonAdd = styled.button`
  padding: 10px 50px;
  margin-top: 20px;

  cursor: pointer;
  font-size: 20px;
  letter-spacing: 2px;
  border: none;
  border-radius: 8px;
  background: none;
  color: rgba(255, 255, 255, 0.63);
  box-shadow: 7px 6px 9px 0px rgba(0, 0, 0, 0.32),
    -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
  transition: color 250ms linear, background-color 250ms linear;

  :hover {
    color: #90ee90;
    background-color: rgb(22, 9, 52);
  }

  :active {
    box-shadow: inset 7px 6px 9px 0px rgba(0, 0, 0, 0.32),
      inset -5px -4px 14px 0px rgba(84, 56, 197, 0.2);
    color: rgba(255, 255, 255, 0.24);
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  color: yellow;
  font-size: 16px;
`;
