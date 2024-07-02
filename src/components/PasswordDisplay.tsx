import { useState } from 'react';
import { FaRegCopy } from "react-icons/fa";
import '../styles/PasswordDisplay.css';

type PasswordDisplayProps = {
  password: string | null;
};

export default function PasswordDisplay({ password }: PasswordDisplayProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleCopy = () => {
    if (password) {
      navigator.clipboard.writeText(password).then(() => {
        setIsCopied(true);
        setIsActive(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    }
  };

  const handleMouseEnter = () => {
    setIsActive(false);
  };

  const handleMouseLeave = () => {
    if (!isCopied) {
      setIsActive(false);
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleCopy}
      >
        {isCopied && <span className="copied-text">Copied</span>}
        <FaRegCopy className={`copy-icon ${isActive ? 'active' : ''}`} />
      </button>
    </div>
  );
}
