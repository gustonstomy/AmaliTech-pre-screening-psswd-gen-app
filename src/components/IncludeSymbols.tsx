import { ChangeEvent } from "react";
import "../styles/checkboxes.css";

type IncludeSymbolsProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
};

export default function IncludeSymbols({
  includeSymbols,
  setIncludeSymbols,
}: IncludeSymbolsProps) {
  function handleIncludeSymbolsChange(_event: ChangeEvent<HTMLInputElement>) {
    setIncludeSymbols(!includeSymbols);
  }
  return (
    <div className="checkbox-container">
      
      <label htmlFor="includeSymbols" className="checkbox">
        <input
        type="checkbox"
        id="includeSymbols"
        checked={includeSymbols}
        className="checkbox-input"
        onChange={handleIncludeSymbolsChange}
      />
      <span className="check_box"></span>
      Include Symbols</label>
    </div>
  );
}
