import { getStrengthLabel } from '../../../../config/utils.js';

export default function PasswordStrength({ strength, password }) {
  if (!password) return null;

  return (
    <div className="-mt-2">
      <div className="grid grid-cols-4 gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={`h-1 rounded-full transition-colors ${
              index < strength ? 'bg-[#bfa5f4]' : 'bg-[#29262f]'
            }`}
          />
        ))}
      </div>

      <p className="mt-2 text-xs text-[#c2aaf0]">
        {getStrengthLabel(strength)}
      </p>
    </div>
  );
}
