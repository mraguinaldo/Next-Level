import Image from "next/image";

export const CategoryCard = ({
  Icon,
  content,
  description,
  title,
}: {
  Icon: string;
  content: string;
  description: string;
  title: string;
}) => {
  return (
    <div className="shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white rounded-[8px] p-6 flex gap-5">
      <Image
        src={Icon}
        alt={content}
        width={40}
        height={40}
        className="w-[40px] h-[40px]"
      />

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[#403CCF] font-medium text-[18px] leading-[100%]">
            {title}
          </h4>
          <h3 className="text-[#242430] font-semibold text-[24px] leading-[100%]">
            {content}
          </h3>
        </div>
        <p className="text-[#242430CC] font-medium text-[14px] leading-[22px]">
          {description}
        </p>
      </div>
    </div>
  );
};
