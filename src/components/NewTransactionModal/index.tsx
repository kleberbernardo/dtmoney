import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransaction } from "../../hooks/useTransaction";
import { useLoading } from "../../hooks/useLoading";

Modal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onResquestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onResquestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransaction();
  const { showLoading, hideLoading } = useLoading();
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  const handleCretaeNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    showLoading("Salvando...");

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    hideLoading();

    // reset
    setTitle("");
    setCategory("");
    setAmount(0);
    setType("deposit");

    onResquestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onResquestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onResquestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCretaeNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          name=""
          id=""
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          name=""
          id=""
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          name=""
          id=""
        />
        <input type="submit" value="Cadastrar" />
      </Container>
    </Modal>
  );
}
