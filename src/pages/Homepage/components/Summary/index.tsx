import { useContext } from "react";
import { SummaryContainer } from "./styles";
import { GithubContext } from "../../../../context/GihubContext";

export function Summary () {

  const {totalCount} = useContext(GithubContext)
  return (
    <SummaryContainer>
      <p>Publicações</p>
      <span>{totalCount} publicações</span>
      </SummaryContainer>
  )
}