import { useLoading } from "../../hooks/useLoading";
import { Div } from "./styles";

export function Loading() {
  const { loading, message } = useLoading();
  return loading ? <Div>{message}</Div> : <></>;
}
