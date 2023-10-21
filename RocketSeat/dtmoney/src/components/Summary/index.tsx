import { useContext } from "react";
import incomeImg from "../../assets/icons/entradas.svg";
import outcomeImg from "../../assets/icons/saídas.svg";
import totalImg from "../../assets/icons/total.svg";

/* Styled Components */
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export const Summary = () => {
    const transactions = useContext(TransactionsContext);

    console.log(transactions);

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="dtmoney income image" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="dtmoney income image" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="dtmoney income image" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}