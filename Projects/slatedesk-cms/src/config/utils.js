export function calculatePasswordStrength(password) {
  let score = 0;

  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  return Math.min(score, 4);
}

export function getStrengthLabel(strength) {
  if (strength === 0) return '';
  if (strength === 1) return 'Weak password';
  if (strength === 2) return 'Fair password';
  if (strength === 3) return 'Strong password';

  return 'Very strong password';
}
