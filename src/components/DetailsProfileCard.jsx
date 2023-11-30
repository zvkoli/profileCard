const DetailsProfileCard = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-2 text-[#444444] cursor-default">
      <h1 className="text-[1.10rem] font-extrabold uppercase max-sm:text-[0.95rem]">
        Warren M Wright
      </h1>
      <p id="job_title" className="text-[0.85rem] max-sm:text-[0.80rem]">
        Front - End Developer
      </p>
      <p id="location" className="flex flex-row justify-center items-center gap-1 text-[0.85rem] max-sm:text-[0.80rem]">
      Opa Locka - Florida
      </p>
    </div>
  );
}

export default DetailsProfileCard;