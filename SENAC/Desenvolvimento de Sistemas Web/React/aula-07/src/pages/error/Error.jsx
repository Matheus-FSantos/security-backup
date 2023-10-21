/* Router DOM */
import { Link } from "react-router-dom";

/* Styled Components */
import { Container, Header, Title, Icon, Text, IconSM } from "./styles";

// eslint-disable-next-line react/prop-types
export const Error = ({ title, code }) => {
  return(
    <Container>
      <Header>
          <Icon className="fa-solid fa-triangle-exclamation"></Icon>
          <Title>{ code }&nbsp;{ title }</Title>
        </Header>
        <Link to="/" className="underlineNone"><Text>Go to Home Page <IconSM className="fa-solid fa-circle-arrow-right"></IconSM></Text></Link>
    </Container>
  );
}
