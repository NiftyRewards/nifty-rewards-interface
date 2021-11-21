import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import BottomBar from "components/layout/BottomBar";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
        <Box margin="8">
          <Box as="main" pt="6">
            {children}
          </Box>
          <Footer />
          <BottomBar />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
