import { cn } from "../../app/src/utils/cn";
import { ILogo } from "./interface";

export const Logo = ({
  className,
  descriptionClassName,
  titleClassName,
}: ILogo) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <h4
        className={cn(
          "text-black font-bold text-[18px] leading-[100%]",
          titleClassName,
        )}
      >
        Speak With Us
      </h4>
      <p
        className={cn(
          "text-[#403CCF] font-normal text-[12px] leading-[100%]",
          descriptionClassName,
        )}
      >
        JobSeeker
      </p>
    </div>
  );
};
