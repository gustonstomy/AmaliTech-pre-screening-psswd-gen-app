import { useState } from "react";
import PasswordLength from "./components/PasswordLength";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import { generatePassword } from "./utils/generatePassword";
import PasswordDisplay from "./components/PasswordDisplay";


function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  function handleGeneratePassword (){
    const newPassword = generatePassword ({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword)
  }

  return (
    <div className="font-JetBrains flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <h1 className="text-Darkgrey-color py-5 fs-l">Password Generator</h1>
      <PasswordDisplay password={password}/>
      <div className="w-[20rem] bg-Greycolor p-4">
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUppercase
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
        />
        <IncludeLowercase
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
        />
        <IncludeNumbers
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
        />
        <IncludeSymbols
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <button onClick={handleGeneratePassword}
        className="px-4 py-2 bg-GreenColor rounded-md
        shadow-md w-full border text-black border-solid 
        hover:border-GreenColor 
        hover:text-GreenColor hover:bg-Greycolor transition-all duration-300 uppercase">
        Generate</button>
      </div>
    </div>
  );
}

export default App;
