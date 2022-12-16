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
export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionProvider({children}:TransactionProviderProps) {
    const [transactions, setTransactions]= useState<Transaction[]>([])
  
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
          
    }, []);

    function CreateTransaction(transaction:TransactionInputs) {
     
          api.post('/transactions', transaction)
}
    return (
        <TransactionsContext.Provider value={}>
            {children}
        </TransactionsContext.Provider>
    );
}