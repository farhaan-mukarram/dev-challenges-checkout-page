import { type FunctionComponent, type PropsWithChildren } from "react";

const Container: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col max-w-5xl px-3 mx-auto">{children}</div>;
};

export default Container;
