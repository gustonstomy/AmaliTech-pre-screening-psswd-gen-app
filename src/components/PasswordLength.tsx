import { ChangeEvent } from "react";
import '../styles/PasswordLength.css';

type PasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
};

export default function PasswordLength({
  passwordLength,
  setPasswordLength,
}: PasswordLengthProps) {
  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value, 10));
  }

  return (
    <div className="password-length-container">
      <label className="password-length-label">
        <div className="char-len">Character Length</div>
        <div className="password-length-value">{passwordLength}</div>
      </label>
      <input
        type="range"
        id="passwordLength"
        min="0"
        max="20"
        value={passwordLength}
        className="password-length-range"
        onChange={handlePasswordLengthChange}
        style={{
          background: `linear-gradient(to right, #A4FFAF ${passwordLength * 5}%, black ${passwordLength * 5}%)`
        }}
      />
    </div>
  );
}
