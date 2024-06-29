import { ChangeEvent } from "react";
import "../styles/checkboxes.css";

type IncludeUppercaseProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (include: boolean) => void;
};

export default function IncludeUppercase({
  includeUppercase,
  setIncludeUppercase,
}: IncludeUppercaseProps) {
  function handleIncludeUppercaseChange(_event: ChangeEvent<HTMLInputElement>) {
    setIncludeUppercase(!includeUppercase);
  }
  return (
    <div className="checkbox-container">
      
      <label htmlFor="includeUppercase">
        <input
        type="checkbox"
        id="includeUppercase"
        checked={includeUppercase}
        className="checkbox-input"
        onChange={handleIncludeUppercaseChange}
      />
      <span className="check_box"></span>
      Include Uppercase Letters</label>
    </div>
  );
}
