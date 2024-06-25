type GeneratePasswordOptions = {
  length: number;
  includeUppercase: boolean;
  includeLowerercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_-+={}[]|;:<>,.?/~`";

function generatePassword({
  length,
  includeUppercase,
  includeLowerercase,
  includeNumbers,
  includeSymbols,
}: GeneratePasswordOptions) {
  let chars = "";
  if (includeLowerercase) chars += LOWERCASE_LETTERS;
  if (includeUppercase) chars += UPPERCASE_LETTERS;
  if (includeNumbers) chars += NUMBERS;
  if (includeSymbols) chars += SYMBOLS;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export default { generatePassword };
