import type { ReactNode } from "react";
import Header from "../../widgets/LayoutHeader/Header";
import Footer from "../../widgets/LayoutFooter/Footer";
import UserTabs from "../../widgets/UserTabs/UserTabs";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <UserTabs />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
