import { useState } from "react";
import PasswordLength from "./components/PasswordLength";

function App() {
  const [password, setPassword] = useState<String | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  return (
    <div className="font-JetBrains flex justify-center items-center min-h-screen bg-black text-white">
      <div className="w-[20rem] bg-Greycolor p-4">
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
      </div>
    </div>
  );
}

export default App;
