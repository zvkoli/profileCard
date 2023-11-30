import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-4">
      <a
        className="text-3xl text-[#444444]"
        href=""
        rel="nofollow"
      >
        <SiInstagram />
      </a>
      <a
        className="text-3xl text-[#444444]"
        href="mailto:"
        rel="nofollow"
      >
        <SiGmail />
      </a>
      <a
        className="text-3xl text-[#444444]"
        href=""
        rel="nofollow"
      >
        <SiWhatsapp />
      </a>
      <a
        className="text-3xl text-[#444444]"
        href=""
        rel="nofollow"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Contact;
