import { Button } from "@nextui-org/button";
import React from "react";

interface DeButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}
export const DeButton: React.FC<DeButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <>
      <div className="">
        <Button
          className={`${className} rounded-full py-6 px-10`}
          onClick={onClick}
        >
          {text}
        </Button>
      </div>
    </>
  );
};
