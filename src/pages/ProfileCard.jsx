import Profile from "../components/Profile";
import DetailsProfileCard from "../components/DetailsProfileCard";
import Contact from "../components/Contact";

const ProfileCard = () => {
  return (
    <div className="w-3/12 h-4/6 rounded-md bg-[#161616] shadow-sm max-xl:w-4/12 max-lg:w-5/12 max-md:w-6/12 max-sm:w-10/12">
      <div className="w-full h-[50%] flex flex-row justify-center items-center">
        <Profile />
      </div>
      <div className="w-full h-[25%] flex flex-row justify-center items-center">
        <DetailsProfileCard />
      </div>
      <div className="w-full h-[25%] flex flex-row justify-center items-center">
        <Contact />
      </div>
    </div>
  );
}

export default ProfileCard;