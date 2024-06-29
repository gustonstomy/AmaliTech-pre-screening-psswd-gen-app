import { ChangeEvent } from "react";
import "../styles/checkboxes.css";

type IncludeLowercaseProps = {
  includeLowercase: boolean;
  setIncludeLowercase: (include: boolean) => void;
};

export default function IncludeLowercase({
  includeLowercase,
  setIncludeLowercase,
}: IncludeLowercaseProps) {
  function handleIncludeLowercaseChange(_event: ChangeEvent<HTMLInputElement>) {
    setIncludeLowercase(!includeLowercase);
  }
  return (
    <div className="checkbox-container">
      
      <label htmlFor="includeLowercase">
        <input
        type="checkbox"
        id="includeLowercase"
        checked={includeLowercase}
        className="checkbox-input"
        onChange={handleIncludeLowercaseChange}
      />
      <span className="check_box"></span>
      Include Lowercase Letters</label>
    </div>
  );
}
