import { UserProfile } from "../../../types";
interface ProfileCardProps {
  profile: UserProfile;
  onSelectProfileClick: (profileID: number, bgColor: string) => void;
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
export const ProfileCard = ({
  profile,
  onSelectProfileClick,
}: ProfileCardProps) => {
  const bgColor = BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)];
  return (
    <div
      key={profile.id}
      className={`h-[9rem] w-[9rem] ${bgColor} flex cursor-pointer flex-col items-center rounded-md`}
      onClick={() => onSelectProfileClick(profile.id, bgColor)}
    >
      <img
        src={`https://robohash.org/${profile.name}.png`}
        alt={profile.name}
      />
      <p>{profile.name}</p>
    </div>
  );
};
