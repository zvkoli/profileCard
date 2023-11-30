import Pic from "../assets/me.webp";

const Profile = () => {
  return (
    <div className="w-36 h-36 border-2 border-[#2B2B2B] rounded-full p-2">
      <img
        className="w-full h-full rounded-full bg-white"
        src={Pic}
        alt="PROFILE"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default Profile;
