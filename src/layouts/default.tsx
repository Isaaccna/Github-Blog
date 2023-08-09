import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { PageContainer } from "./styles";

export function DefaultLayout() {
  return (
    <>
    <Header/>
    <PageContainer>
      <Outlet />
    </PageContainer>
    </>
  )
}