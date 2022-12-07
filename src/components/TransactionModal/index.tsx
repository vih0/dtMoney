import Modal from "react-modal";
import { Container } from "./styles";
import imageClose from "../../assets/close.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransacionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
