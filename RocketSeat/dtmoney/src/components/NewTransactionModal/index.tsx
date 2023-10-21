import { FormEvent, useState } from "react";

/* Styled-Components */
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

/* Images */
import closeImg from "../../assets/icons/close.svg";
import incomeImg from "../../assets/icons/entradas.svg";
import outcomeImg from "../../assets/icons/saídas.svg";


/* React Modal */
import ReactModal from "react-modal";
import { api } from "../../services/api";
ReactModal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpened: boolean,
  onCloseNewTransactionModal: () => void
}

export const NewTransactionModal = ({ isOpened, onCloseNewTransactionModal }: NewTransactionModalProps) => {
  const [type, setType] = useState("deposit");

  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const [value, setValue] = useState<number>(0);

  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      title,
      category,
      type,
      value
    };

    api.post("transactions", data);

    onCloseNewTransactionModal();
  }

  return (
    <ReactModal
      isOpen={isOpened}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        onClick={ onCloseNewTransactionModal }
        className="react-modal-close"
      >  
        <img src={ closeImg } alt="Gray close button"/>
      </button>  
  
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        <input type="number" placeholder="Valor" value={ value } onChange={ (e) => setValue(Number(e.target.value)) }/>

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            activeColor="green"
            isActive={ type === "deposit" }
            onClick={ () => setType("deposit") }
          >
            <img
              src={ incomeImg }
              alt="Green income logo"
            />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            activeColor="red"
            isActive={ type === "withdraw" }
            onClick={ () => setType("withdraw") }
          >
            <img
              src={ outcomeImg }
              alt="Red outcome logo"
            />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" value={ category } onChange={ (e) => setCategory(e.target.value) }/>
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}