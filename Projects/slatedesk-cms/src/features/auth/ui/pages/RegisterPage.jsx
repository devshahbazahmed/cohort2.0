import { Check, Eye, EyeOff, LockKeyhole, Mail, UserRound } from 'lucide-react';
import useAuth from '../../hooks/useAuth.js';
import Footer from '../components/Footer.jsx';
import FormField from '../components/FormField.jsx';
import SocialButton from '../components/SocialButton.jsx';
import PasswordStrength from '../components/PasswordStrength.jsx';
import GoogleIcon from '../components/GoogleIcon.jsx';
import BrandPanel from '../components/BrandPanel.jsx';

const inputStyles = `
  h-14 w-full rounded-lg border border-[#45414e]
  bg-[#1c1a21] pl-12 pr-4 text-[15px] text-white
  outline-none transition duration-200
  placeholder:text-[#5f5a68]
  hover:border-[#5d5669]
  focus:border-[#FE7F2D]
  focus:ring-2 focus:ring-[#9d7adb]/20
`;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    handleGoogleLogin,
    handleGithubLogin,
    onRegisterSubmit,
    showPassword,
    setShowPassword,
    errors,
    passwordStrength,
    password,
    isSubmitting,
    navigate,
  } = useAuth();
  return (
    <div className="min-h-screen bg-[#111015] text-[#f2eff8]">
      <main className="grid min-h-[calc(100vh-86px)] lg:grid-cols-[42%_58%]">
        <BrandPanel />

        <section className="flex items-center justify-center px-5 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-140">
            <div className="mb-9">
              <h1 className="text-3xl font-semibold tracking-[-0.035em] sm:text-[38px]">
                Create your account
              </h1>

              <p className="mt-2 text-sm text-[#aaa4b3] sm:text-base">
                Experience the future of collaborative data intelligence.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-5"
              noValidate
            >
              <FormField label="Full Name" error={errors.fullName?.message}>
                <UserRound
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 size-4.75 -translate-y-1/2 text-[#625c6d]"
                />

                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={inputStyles}
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Full name must contain at least 2 characters',
                    },
                    maxLength: {
                      value: 60,
                      message: 'Full name cannot exceed 60 characters',
                    },
                  })}
                />
              </FormField>

              <FormField label="Email Address" error={errors.email?.message}>
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 size-4.75 -translate-y-1/2 text-[#625c6d]"
                />

                <input
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  className={inputStyles}
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address',
                    },
                  })}
                />
              </FormField>

              <FormField label="Password" error={errors.password?.message}>
                <LockKeyhole
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-1/2 size-4.75 -translate-y-1/2 text-[#625c6d]"
                />

                <input
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className={`${inputStyles} pr-12`}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must contain at least 8 characters',
                    },
                    validate: {
                      uppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        'Include at least one uppercase letter',
                      lowercase: (value) =>
                        /[a-z]/.test(value) ||
                        'Include at least one lowercase letter',
                      number: (value) =>
                        /\d/.test(value) || 'Include at least one number',
                    },
                  })}
                />

                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6c6675] transition hover:text-[#c5b2f2]"
                >
                  {showPassword ? (
                    <EyeOff className="size-4.75" />
                  ) : (
                    <Eye className="size-4.75" />
                  )}
                </button>
              </FormField>

              <PasswordStrength
                strength={passwordStrength}
                password={password}
              />

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-[#bbb5c3]">
                  <span className="relative mt-0.5 block size-5 shrink-0">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      {...register('termsAccepted', {
                        required:
                          'You must accept the Terms of Service and Privacy Policy',
                      })}
                    />

                    <span
                      className="
                        absolute inset-0 rounded-[5px] border border-[#514b5a]
                        bg-[#1c1a21] transition
                        peer-checked:border-[#a78bde]
                        peer-checked:bg-[#856ac2]
                        peer-focus-visible:ring-2
                        peer-focus-visible:ring-[#9d7adb]/40
                      "
                    />

                    <Check
                      className="
                        pointer-events-none absolute left-1/2 top-1/2 size-3.5
                        -translate-x-1/2 -translate-y-1/2 scale-75
                        text-white opacity-0 transition
                        peer-checked:scale-100 peer-checked:opacity-100
                      "
                    />
                  </span>

                  <span className="leading-5">
                    I agree to the{' '}
                    <a
                      href="/terms"
                      className="text-[#c6aff3] transition hover:text-white"
                    >
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a
                      href="/privacy"
                      className="text-[#c6aff3] transition hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {errors.termsAccepted && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.termsAccepted.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  flex h-14 w-full items-center justify-center rounded-lg
                  bg-[#FE7F2D]
                  px-5 text-base font-semibold text-[#21113c]
                  shadow-[0_14px_35px_rgba(138,105,199,0.18)]
                  transition duration-200
                  hover:brightness-110
                  focus:outline-none focus:ring-2 focus:ring-[#b89cec]
                  focus:ring-offset-2 focus:ring-offset-[#111015]
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              >
                {isSubmitting ? 'Creating account...' : 'Create Account'}
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#27242d]" />

              <span className="text-[11px] font-semibold uppercase tracking-wide text-[#5e5967]">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-[#27242d]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <SocialButton onClick={handleGoogleLogin}>
                <GoogleIcon />
                Google
              </SocialButton>

              <SocialButton onClick={handleGithubLogin}>GitHub</SocialButton>
            </div>

            <p className="mt-14 text-center text-sm text-[#aaa4b3] sm:text-base">
              Already have an account?{' '}
              <span
                onClick={() => navigate('/login')}
                className="font-semibold text-[#c6aff3] transition hover:text-white"
              >
                Log In
              </span>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
