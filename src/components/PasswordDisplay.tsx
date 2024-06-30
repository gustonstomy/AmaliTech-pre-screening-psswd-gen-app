import { useState } from 'react';
// import { FaRegCopy } from "react-icons/fa";
import '../styles/PasswordDisplay.css'; 
import image from '../assets/images/icon-copy.svg';


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
        {/* <FaRegCopy className="copy-icon" /> */}
        <img src={image} className="copy-icon" />
      </button>
    </div>
  );
}
