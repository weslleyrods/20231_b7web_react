import { ReactNode } from "react";

type PhotoProps = {
  url: string;
  legend: string;
  children: ReactNode;
};

const Photo = ({ legend, children }: PhotoProps) => {
  return (
    <>
      {children}
      <p>{legend}</p>
    </>
  );
};

export default Photo;
