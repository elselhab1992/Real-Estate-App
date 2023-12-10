import React from "react";
import {
  TopContainer,
  Img,
  LinkStyles,
  Form,
  Input,
  Textarea,
  BtnContainer,
  MessageBtn,
  CallBtn,
} from "./ContactAgentStyles";

const ContactAgent = ({ house }) => {
  const { image, name } = house.agent;

  return (
    <div>
      <TopContainer>
        <Img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <LinkStyles to="/">View Listings</LinkStyles>
        </div>
      </TopContainer>
      <Form>
        <Input type="text" id="name" name="name" placeholder="Name*" required />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email*"
          required
        />
        <Input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone*"
          required
        />
        <Textarea></Textarea>
        <BtnContainer>
          <MessageBtn>Send Message</MessageBtn>
          <CallBtn>Call</CallBtn>
        </BtnContainer>
      </Form>
    </div>
  );
};

export default ContactAgent;
