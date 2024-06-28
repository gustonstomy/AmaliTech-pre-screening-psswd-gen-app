import React from 'react';
import '../styles/Strengthmeter.css';

type StrengthProps = {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

const getStrengthText = (value: number): string => {
  switch (value) {
    case 1: return "Too Weak";
    case 2: return "Weak";
    case 3: return "Medium";
    case 4: return "Strong";
    default: return "";
  }
};

const Strength: React.FC<StrengthProps> = ({ length, includeUppercase, includeLowercase, includeNumbers, includeSymbols }) => {
  const calculateStrength = () => {
    if (!(includeUppercase || includeLowercase || includeNumbers || includeSymbols)) {
      return 0;
    }

    let strength = (length / 10) * 2;
    if (includeUppercase) strength *= 1.2;
    if (includeLowercase) strength *= 1.2;
    if (includeSymbols) strength *= 1.3;
    if (includeNumbers) strength *= 1.1;

    strength = Math.floor(strength);

    if (strength < 1) return 1;
    if (strength > 4) return 4;
    return strength;
  };

  const strengthValue = calculateStrength();
  const strengthText = getStrengthText(strengthValue);

  return (
    <div className="container">
      <p className="color-light">Strength</p>
      <div className="strength">
        <span className="fs-md">{strengthText}</span>
        <div className="scale" data-value={strengthValue}>
          <span className="scale_bar"></span>
          <span className="scale_bar"></span>
          <span className="scale_bar"></span>
          <span className="scale_bar"></span>
        </div>
      </div>
    </div>
  );
};

export default Strength;
