import { Button, useToast } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

type ClipboardButtonProps = {
  value: string;
  text: string;
};

function ClipboardButton({ value, text }: ClipboardButtonProps) {
  const toast = useToast();

  return (
    <CopyToClipboard
      text={value}
      onCopy={() =>
        toast({
          title: `Copied ${value} in clipboard`,
          status: "success",
          duration: 2000,
        })
      }
    >
      <Button>Copy {text}</Button>
    </CopyToClipboard>
  );
}

export default ClipboardButton;
