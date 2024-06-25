import { useState } from 'react';
import { AiOutlineCopy } from "react-icons/ai";

type PasswordDisplayProps = {
  password: string | null;
};

export default function PasswordDisplay({ password }: PasswordDisplayProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="bg-Greycolor text-white px-4 py-2 break-all flex justify-between items-center w-[20rem] mb-4">
      <div className={password ? "text-white" : "text-Darkgrey-color"}>
        {password || "P4$5W0rD!"}
      </div>
      <button 
        className="copy-btn button flex items-center ml-2" 
        datatype="copy" 
        onClick={handleCopy}
      >
        <AiOutlineCopy className="icon w-[21px] h-[24px] text-GreenColor hover:white-color" />
        {isCopied && <span className="ml-2 text-sm text-green-500">Copied</span>}
      </button>
    </div>
  );
}
