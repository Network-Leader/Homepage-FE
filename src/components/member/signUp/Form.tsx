import { Link } from "react-router-dom";
import { Formation, FormContainer, Header } from "../../../styles/member/form";
import { Button, Text, TextField } from "../../common";

const Form = () => {
  return (
    <FormContainer>
      <Header>
        <Text size="h2" weight="medium">
          Sign Up
        </Text>
      </Header>
      <Formation>
        <TextField
          width="330px"
          height="35px"
          margin="0 0 10px 0"
          placeholder="Student ID"
          onChange={(e) => {
            console.log(22);
          }}
        />
        <TextField
          width="330px"
          height="35px"
          margin="0 0 10px 0"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            console.log(22);
          }}
        />
        <TextField
          width="330px"
          height="35px"
          margin="0 0 10px 0"
          placeholder="Password Confirm"
          type="password"
          onChange={(e) => {
            console.log(22);
          }}
        />
        <TextField
          width="330px"
          height="35px"
          margin="0 0 10px 0"
          placeholder="Birthday"
          onChange={(e) => {
            console.log(22);
          }}
        />
        <TextField
          width="330px"
          height="35px"
          margin="0 0 10px 0"
          placeholder="E-mail"
          type="email"
          onChange={(e) => {
            console.log(22);
          }}
        />
        <TextField
          width="330px"
          height="35px"
          margin="0 0 40px 0"
          placeholder="Github ID"
          onChange={(e) => {
            console.log(22);
          }}
        />
        <Button
          width="100%"
          height="65px"
          fontSize="xxlarge"
          fontWeight="medium"
          color="white"
          backgroundColor="black"
          hoverColor="black"
          hoverBgColor="block"
        >
          Create Account
        </Button>
      </Formation>
      <div className="sign-in">
        <Text size="medium">이미 계정이 있으신가요?</Text>
        <Link to="/member/signin">
          <Text size="medium" weight="medium" color="highlight">
            Log In
          </Text>
        </Link>
      </div>
    </FormContainer>
  );
};

export default Form;
