/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../../../../../shared/types";
import { Button, Card, Modal } from "../../../../../shared/components";
import { useAuth } from "../../../../../shared/hooks/useAuth";

export const ProfileSelector = () => {
  const { user, updateDBUser, signOut } = useAuth();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleAddProfile = (data: Record<string, any>) => {
    const updatedUser = user;
    if (user?.profiles?.length === 4) {
      toast.error("You can only have 4 profiles", { position: "top-center" });
      setOpenModal(!openModal);
      return;
    }
    if (user?.profiles === undefined || user?.profiles?.length === 0) {
      const newProfile: UserProfile = {
        id: 1,
        name: data.name,
        avatar: `https://robohash.org/${data.name}.png`,
        bgColor: data.bgColor,
      };
      updatedUser.profiles = [newProfile];
    } else {
      const newProfile: UserProfile = {
        id: user?.profiles.length + 1,
        name: data.name,
        avatar: `https://robohash.org/${data.name}.png`,
        bgColor: data.bgColor,
      };
      updatedUser?.profiles?.push(newProfile);
    }
    updateDBUser(updatedUser);
    setOpenModal(false);
  };

  const handleSetSelectedProfile = (profileID: number, bgColor: string) => {
    const selectedProfile = user?.profiles?.find(
      (profile: UserProfile) => profile.id === profileID,
    );
    if (selectedProfile) {
      console.log("selectedProfile", selectedProfile);
      localStorage.setItem(
        "profile",
        JSON.stringify({ ...selectedProfile, bgColor }),
      );
      navigate("/home");
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const HandleSignOut = () => {
    signOut();
    navigate("/auth/login");
  };

  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center gap-10 text-white">
      <Button
        className="absolute top-10 right-10 cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white"
        label={"Sign Out"}
        onClick={HandleSignOut}
        type={"button"}
      />
      <h4 className="text-5xl">Who is watching right now?</h4>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="flex flex-wrap justify-center gap-10">
          {user?.profiles?.map((profile: UserProfile) => {
            return (
              <Card
                data={profile}
                key={profile.id}
                onClick={handleSetSelectedProfile}
              />
            );
          })}
        </div>
        <div>
          <Button
            icon={<FaCirclePlus />}
            iconPosition={"left"}
            type={"button"}
            className={
              "flex h-[9rem] w-[9rem] items-center justify-center rounded-md bg-transparent text-center text-7xl transition-colors duration-150 hover:bg-gray-300 hover:text-black"
            }
            onClick={handleOpenModal}
          />
          <p className="text-center">Add Profile</p>
        </div>
      </div>
      <Modal
        open={openModal}
        title={"Add Profile"}
        isModalForm={true}
        formFields={[
          {
            name: "name",
            label: "Profile Name",
            type: "text",
            placeholder: "Enter profile name",
          },
        ]}
        initialValues={{ name: "" }}
        onSubmit={handleAddProfile}
      />
      <ToastContainer />
    </div>
  );
};
