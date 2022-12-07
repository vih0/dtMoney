import Modal from "react-modal";
import { ButtonBox, Container, TypeContaeiner } from "./styles";
import imageClose from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransacionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={imageClose} alt="Close Modal" />
      </button>
      <Container>
        <h2>Cadastrarn Transação</h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <TypeContaeiner>
          <ButtonBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
                      isActive={type === 'deposit'}
            activeColor={'green'}          
          >
            <img src={incomeImg} alt="Icon Entrada" />
            <span>Entrada</span>
          </ButtonBox>
          <ButtonBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === 'withdraw'}          
            activeColor={'red'}          
                      
          >
            <img src={outcomeImg} alt="Icon Saida" />
            <span>Entrada</span>
          </ButtonBox>
        </TypeContaeiner>
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
