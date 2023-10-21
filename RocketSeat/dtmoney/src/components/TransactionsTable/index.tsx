/* React */
import { useContext } from "react";

/* Styled Components */
import { Container } from "./styles";
import { TransactionsContext } from "../../TransactionsContext";

export const TransactionsTable = () => {
    const transactions = useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                {
                                    transaction.type === "withdraw" ?
                                        <td className={transaction.type}>- {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(transaction.amount)}
                                        </td>
                                        :
                                        <td className={transaction.type}>+ {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(transaction.amount)}
                                        </td>
                                }
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(transaction.createdAt))}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    );
}