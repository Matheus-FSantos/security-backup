import { useState } from "react";

/* Styled components */
import { GlobalStyle } from "./styles/global";

/* Components */
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

/* ContextAPI */
import { TransactionsProvider } from "./TransactionsContext";

const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={ handleOpenNewTransactionModal }
      />
      <Dashboard />
      <NewTransactionModal
        isOpened={ isNewTransactionModalOpen }
        onCloseNewTransactionModal={ handleCloseNewTransactionModal }
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export { App };