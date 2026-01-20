import { cn } from "../../app/src/utils/cn";
import { IContainer } from "./interface";

export const Container = ({ children, className }: IContainer) => {
  return (
    <div className={cn("w-full max-w-[1140px] m-auto px-8 sm:px-8", className)}>
      {children}
    </div>
  );
};
