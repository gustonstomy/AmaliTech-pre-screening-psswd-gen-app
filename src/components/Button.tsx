import { useState } from 'react';
import '../styles/Button.css';

type GenerateButtonProps = {
  handleClick: () => void;
}

function GenerateButton({ handleClick }: GenerateButtonProps) {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  return (
    <button
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`generate-btn ${isTouched ? 'touched' : ''}`}
    >
      Generate ➜
    </button>
  );
}

export default GenerateButton;
