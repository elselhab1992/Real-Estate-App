import styled from "styled-components";
import { Link } from "react-router-dom";

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Img = styled.img`
  width: 5rem;
`;

const LinkStyles = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d4d7d9;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  height: 120px;
  border: 1px solid #d4d7d9;
  border-radius: 5px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const MessageBtn = styled.button`
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  transition: 700ms;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

const CallBtn = styled.button`
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  transition: 700ms;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export {
  TopContainer,
  Img,
  LinkStyles,
  Form,
  Input,
  Textarea,
  BtnContainer,
  MessageBtn,
  CallBtn,
};
