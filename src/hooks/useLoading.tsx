import { createContext, ReactNode, useContext, useState } from "react";
import { Loading } from "../components/Loading";

interface LoadingProviderProps {
  children: ReactNode;
}

interface LoadingContextData {
  loading: boolean;
  message: string;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextData>({
  loading: false,
} as LoadingContextData);

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const showLoading = (message: string = "Aguarde...") => {
    setMessage(message);
    setLoading(true);
  };
  const hideLoading = () => setLoading(false);

  return (
    <LoadingContext.Provider
      value={{ loading, message, showLoading, hideLoading }}
    >
      <Loading />
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  return useContext(LoadingContext);
}
