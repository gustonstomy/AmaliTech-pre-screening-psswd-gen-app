import { useState } from 'react';
import { AiOutlineCopy } from "react-icons/ai";
import '../styles/PasswordDisplay.css';

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
    <div className="password-display-container">
      <div className={password ? "password-text" : "password-placeholder"}>
        {password || "P4$5W0rD!"}
      </div>
      <button 
        className="copy-btn button flex items-center ml-2" 
        datatype="copy" 
        onClick={handleCopy}
      >
        {isCopied && <span className="copied-text">Copied</span>}
        <AiOutlineCopy className="copy-icon" />
      </button>
    </div>
  );
}
