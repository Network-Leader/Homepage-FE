import { Link } from "react-router-dom";
import { Formation, FormContainer, Header } from "../../../styles/member/form";
import { Button, Text, TextField } from "../../common";

const Form = () => {
  return (
    <FormContainer>
      <Header>
        <Text size="h2" weight="medium">
          Log In
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
          margin="0 0 40px 0"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            console.log(22);
          }}
        />
        <Button
          width="100%"
          height="65px"
          backgroundColor="block"
          fontSize="xxlarge"
          fontWeight="medium"
          color="black"
          hoverColor="white"
          hoverBgColor="black"
        >
          Log In
        </Button>
      </Formation>
      <div className="sign-up">
        <Text size="medium">Don't have an account?</Text>
        <Link to="/member/signup">
          <Text size="medium" weight="medium">
            Sign Up
          </Text>
        </Link>
      </div>
    </FormContainer>
  );
};

export default Form;
