import { Button } from "@chakra-ui/react";
import useWeb3Auth from "../hooks/useWeb3Auth";

const AuthComponent = () => {
  const web3auth = useWeb3Auth();

  const Connect = async () => {
    if (!web3auth) {
      console.log("No web3Auth");
      return;
    }
    const provider = await web3auth.connect();
    console.log({ provider });
  };

  return (
    <>
      <Button onClick={Connect}>Connect</Button>
    </>
  );
};

export default AuthComponent;
