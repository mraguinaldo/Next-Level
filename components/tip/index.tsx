export const Tip = ({ content, id }: { content: string; id: number }) => {
  return (
    <div key={id} className="flex gap-[25px]">
      <span className="text-[#242430] text-[24px] font-bold leading-[100%] md:flex hidden">
        {id}
      </span>
      <p className="text-[#242430CC] font-medium md:text-[20px] text-[14px] leading-[28px]">
        {content}
      </p>
    </div>
  );
};
