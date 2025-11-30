import { ReactNode } from "react";

interface childrenProps {
  children: ReactNode;
}
const Container = ({ children }: childrenProps) => {
  return <div className="max-w-[1200px] mx-auto">{children}</div>;
};

export default Container;
