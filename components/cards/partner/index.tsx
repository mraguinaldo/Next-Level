import Image from "next/image";
import { IPartnerCard } from "./interface";

export const PartnerCard = ({
  logo,
  name,
  company,
  country,
  areaActivity,
  content,
  description,
  avatar,
  employeeType,
  id,
}: IPartnerCard) => {
  return (
    <div className="flex flex-col gap-[120px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] w-full rounded-[8px] pt-9 px-9 pb-6">
      <div className="flex flex-col gap-[46px]">
        <div className="flex gap-4 items-center">
          <Image
            src={logo}
            alt={String(logo)}
            width={100}
            height={100}
            className="w-[66px] h-[66px] rounded-[6px]"
          />
          <div className="flex flex-col gap-1.5">
            <h4 className="text-[#242430] text-[18px] font-bold">{company}</h4>
            <p className="text-[#B8B8BF] text-[14px] font-medium">{country}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <h4 className="text-[#242430] text-[24px] font-bold">
            {areaActivity}
          </h4>
          <p className="text-[#B8B8BF] text-[18px] font-medium">{content}</p>
        </div>

        <p className="text-[#242430CC] text-[18px] font-medium leading-[28px]">
          {description}
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
