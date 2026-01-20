import { cn } from "@/app/src/utils/cn";
import Image from "next/image";
import { IBonusCard } from "./interface";

export const BonusCard = ({
  id,
  index,
  avatar,
  content,
  desciption,
  employeeType,
  name,
  title,
}: IBonusCard) => {
  return (
    <div
      key={id}
      className={cn(
        "flex flex-col gap-7 pt-9 pb-7 px-8 rounded-[8px] bg-white w-full max-w-[327px] shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
        index >= 2 ? "col-span-1 md:col-span-1" : "",
      )}
    >
      <div className="flex flex-col gap-4 w-full max-w-[216px]">
        <div className="flex flex-col">
          <p className="text-[#403CCF] text-[18px] font-medium">{content}</p>
          <h4 className="text-[#242430] text-[24px] font-bold leading-[34.5px]">
            {title}
          </h4>
        </div>
        <p className="text-[#242430CC] text-[14px] font-medium leading-[22px]">
          {desciption}
        </p>
      </div>

      <div className="flex gap-3">
        <Image
          src={avatar}
          alt={String(id)}
          width={100}
          height={100}
          className="w-[42px] h-[42px] rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[#242430CC] text-[12px] font-medium uppercase">
            {employeeType}
          </span>
          <p className="text-[#242430] text-[13px] font-bold">{name}</p>
        </div>
      </div>
    </div>
  );
};
