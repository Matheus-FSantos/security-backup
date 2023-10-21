/* Images */
import logoImg from "../../assets/icons/logo.svg";

/* Styled Components */
import { Container, Content, Button } from "./styles";


interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
    return(
        <Container>
            <Content>
                <img src={ logoImg } alt="dtmoney logo" />

                <Button type="button" onClick={ onOpenNewTransactionModal }>
                    Nova Transação
                </Button>
            </Content>
        </Container>
    );
}
