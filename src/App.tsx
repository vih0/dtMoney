import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransacionModal } from "./components/TransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(Boolean);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransacionModal
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
