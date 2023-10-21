/* Styled Components */
import { Container } from "./styles";

/* Components */
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export const Dashboard = () =>{
    return(
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}