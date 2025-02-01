export interface AdvertisementProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export const Advertisement = ({
  description,
  icon,
  title,
}: AdvertisementProps) => {
  return (
    <div className="flex h-[300px] flex-1 flex-col justify-between rounded-xl bg-linear-to-br from-[#121441] to-[#361853] p-5 text-white">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-slate-300">{description}</p>
        </div>
      </div>
      <div className="self-end">{icon}</div>
    </div>
  );
};
