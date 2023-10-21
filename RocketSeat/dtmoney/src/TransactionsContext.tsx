import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface ITransactions {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext<ITransactions[]>([]);

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api.get("transactions")
      .then(data => {
        setTransactions(data.data.transactions);
      });
  }, []);

  return(
    <TransactionsContext.Provider value={ transactions }>
      { children }
    </TransactionsContext.Provider>
  );
}