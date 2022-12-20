import { createContext, useState,useEffect, ReactNode } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}
interface TransactionInputs{
    title: string;
    amount: number;
    type: string;
    category: string;
}
interface TransactionProviderProps {
      children:ReactNode
}
interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInputs) =>Promise< void>;
  }
export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({children}:TransactionProviderProps) {
    const [transactions, setTransactions]= useState<Transaction[]>([])
  
    useEffect(() => {
        api.get('transactions') 
            .then(response => setTransactions(response.data.transactions))
          
    }, []);

   async function createTransaction(transactionInput:TransactionInputs) {
       const response = await api.post('/transactions', {...transactionInput,
        createAt: new Date(),
       })
       const { transaction } = response.data
       
       setTransactions([
           ...transactions,
           transaction,
       ])
}
    return (
        <TransactionsContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}