type StrengthOptions = {
  length: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

function calculateStrength({
  length,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
}: StrengthOptions): number {
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
}

export { calculateStrength };
