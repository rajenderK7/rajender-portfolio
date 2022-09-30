import { HiMail } from "react-icons/hi";

const MailHelper = ({ title, mail, className }: any) => {
  return (
    <a href={mail} className={`btn-basic ml-3 lg:ml-0 ${className}`}>
      {title}
      <span className="ml-2 text-xl">{<HiMail />}</span>
    </a>
  );
};

export default MailHelper;
