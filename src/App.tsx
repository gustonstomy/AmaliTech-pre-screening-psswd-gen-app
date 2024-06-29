import { useState } from "react";
import PasswordLength from "./components/PasswordLength";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import { generatePassword } from "./utils/generatePassword";
import PasswordDisplay from "./components/PasswordDisplay";
import Strength from "./components/Strength";
import GenerateButton from "./components/Button";
import Header from "./components/Header";


function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(0);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
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
    <div className="main-container">
      <Header/>
      <PasswordDisplay password={password}/>
      <div className="sub-container">
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
         <Strength 
          length={passwordLength}
          includeUppercase={includeUppercase}
          includeLowercase={includeLowercase}
          includeNumbers={includeNumbers}
          includeSymbols={includeSymbols}
        />
        <GenerateButton handleClick={handleGeneratePassword}/>
      </div>
    </div>
  );
}

export default App;
