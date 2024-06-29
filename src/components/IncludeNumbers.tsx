import { ChangeEvent } from "react";
import "../styles/checkboxes.css";

type IncludeNumbersProps = {
  includeNumbers: boolean;
  setIncludeNumbers: (include: boolean) => void;
};

export default function IncludeNumbers({
  includeNumbers,
  setIncludeNumbers,
}: IncludeNumbersProps) {
  function handleIncludeNumbersChange(_event: ChangeEvent<HTMLInputElement>) {
    setIncludeNumbers(!includeNumbers);
  }
  return (
    <div className="checkbox-container">
      
      <label htmlFor="includeNumbers">
        <input
        type="checkbox"
        id="includeNumbers"
        checked={includeNumbers}
        className="checkbox-input"
        onChange={handleIncludeNumbersChange}
      />
      <span className="check_box"></span>
      Include Numbers</label>
    </div>
  );
}
