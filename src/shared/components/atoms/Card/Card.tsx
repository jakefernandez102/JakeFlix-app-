export type CardDataType = {
  id: number;
  name: string;
};
interface CardProps {
  data: CardDataType;
  onClick: (profileID: number, bgColor: string) => void;
}
const BG_COLORS = [
  "bg-green-100",
  "bg-blue-100",
  "bg-red-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-orange-100",
];
export const Card = ({ data, onClick }: CardProps) => {
  const bgColor = BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];
  return (
    <div
      key={data.id}
      className={`h-[9rem] w-[9rem] ${bgColor} flex cursor-pointer flex-col items-center rounded-md`}
      onClick={() => onClick(data.id, bgColor)}
    >
      <img src={`https://robohash.org/${data.name}.png`} alt={data.name} />
      <p>{data.name}</p>
    </div>
  );
};
