import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { LoadingProvider } from "./hooks/useLoading";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransaction";

export function App() {
  const [isNewTransactionOpen, SetIsNewTransaction] = useState(false);
  const handleOpenNewTransactionModal = () => SetIsNewTransaction(true);
  const handleCloseNewTransactionModal = () => SetIsNewTransaction(false);

  return (
    <LoadingProvider>
      <TransactionsProvider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionOpen}
          onResquestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </TransactionsProvider>
    </LoadingProvider>
  );
}
