import { Cloud, Eye, EyeOff, LogIn } from 'lucide-react';
import useAuth from '../../hooks/useAuth.js';
import Divider from '../components/Divider.jsx';
import DecorativeCard from '../components/DecorativeCard.jsx';
import FormField from '../components/FormField.jsx';
import SocialButton from '../components/SocialButton.jsx';
import Footer from '../components/Footer.jsx';

const inputClassName = `
  h-12 w-full rounded-md border border-[#35313d]
  bg-[#0e0c14] px-4 text-sm text-[#eeeaf5]
  outline-none transition
  placeholder:text-[#575260]
  hover:border-[#4c4655]
  focus:border-[#FE7F2D]
  focus:ring-2 focus:ring-[#FE7F2D]/20
`;

export default function LoginPage() {
  const {
    handleGithubLogin,
    handleGoogleLogin,
    handleSubmit,
    onLoginSubmit,
    errors,
    isSubmitting,
    showPassword,
    setShowPassword,
    register,
    navigate,
  } = useAuth();
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-4 py-10 text-white sm:px-8 lg:px-12">
      <section
        className="
          relative z-10 mx-auto flex min-h-[calc(100vh-80px)]
          max-w-375 items-center justify-center overflow-hidden
          border border-white/3
          bg-[#121017]
          px-5 py-12
          shadow-[0_0_100px_rgba(43,32,65,0.18)]
          sm:px-10 lg:px-16
        "
      >
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_38%_42%,rgba(85,66,116,0.09),transparent_28%),radial-gradient(circle_at_72%_70%,rgba(74,54,107,0.07),transparent_30%)]
          "
        />

        <DecorativeCard />

        <div className="relative z-10 w-full max-w-103.75">
          <div
            className="
              rounded-xl border border-[#302c37]
              bg-[#1c191f]/95 px-7 py-8
              shadow-[0_24px_80px_rgba(0,0,0,0.32)]
              backdrop-blur-md
              sm:px-9 sm:py-9
            "
          >
            <header className="mb-8 text-center">
              <div
                className="
                  mx-auto mb-4 flex size-20 items-center justify-center
                  rounded-lg bg-black
                  shadow-[0_8px_30px_rgba(116,85,181,0.3)]
                "
              >
                <img src="/favicon.png" alt="slatedesk" />
              </div>

              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                Slate<span className="text-[#FE7F2D]">Desk</span>
              </h1>

              <p className="mt-1 text-sm text-[#aaa4b0]">
                Sign in to your workspace
              </p>
            </header>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton onClick={handleGoogleLogin}>
                <Cloud className="size-4.5" />
                Google
              </SocialButton>

              <SocialButton onClick={handleGithubLogin}>GitHub</SocialButton>
            </div>

            <Divider />

            <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>
              <div className="space-y-5">
                <FormField label="Email address" error={errors.email?.message}>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="name@company.com"
                    className={inputClassName}
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                  />
                </FormField>

                <FormField
                  label="Password"
                  error={errors.password?.message}
                  action={
                    <a
                      href="/forgot-password"
                      className="text-xs text-[#c7b0ec] transition hover:text-white"
                    >
                      Forgot password?
                    </a>
                  }
                >
                  <input
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className={`${inputClassName} pr-12`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must contain at least 8 characters',
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    className="
                      absolute right-4 top-1/2 -translate-y-1/2
                      text-[#605a69] transition hover:text-[#c7b0ec]
                    "
                  >
                    {showPassword ? (
                      <EyeOff className="size-4.5" />
                    ) : (
                      <Eye className="size-4.5" />
                    )}
                  </button>
                </FormField>
              </div>

              <label className="mt-5 flex w-fit cursor-pointer items-center gap-3 text-xs text-[#aaa4b0]">
                <span className="relative block size-4">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    {...register('rememberMe')}
                  />

                  <span
                    className="
                      absolute inset-0 rounded-[3px]
                      border border-[#37313e] bg-[#0e0c14]
                      transition
                      peer-checked:border-[#FE7F2D]
                      peer-checked:bg-[#FE7F2D]
                      peer-focus-visible:ring-2
                      peer-focus-visible:ring-[#FE7F2D]/40
                    "
                  />

                  <span
                    className="
                      pointer-events-none absolute left-1.25 top-0.5
                      h-2 w-1 rotate-45 border-b-2 border-r-2
                      border-white opacity-0 transition
                      peer-checked:opacity-100
                    "
                  />
                </span>
                Stay signed in
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-7 flex h-12 w-full items-center justify-center gap-2
                  rounded-md bg-[#FE7F2D]
                  text-sm font-medium text-[#f2ebff]
                  shadow-[0_10px_30px_rgba(115,84,178,0.23)]
                  transition
                  hover:bg-[#FE&F23]
                  focus:outline-none focus:ring-2
                  focus:ring-[#a585df]
                  focus:ring-offset-2 focus:ring-offset-[#1c191f]
                  disabled:cursor-not-allowed disabled:opacity-60
                "
              >
                {isSubmitting ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <LogIn className="size-4.25" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 border-t border-[#2b2730] pt-7 text-center">
              <p className="text-xs text-[#aaa4b0]">
                Don&apos;t have an account?{' '}
                <span
                  onClick={() => navigate('/register')}
                  className="font-semibold text-[#c9b3ed] transition hover:text-white"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
