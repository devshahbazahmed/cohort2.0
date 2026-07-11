import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { calculatePasswordStrength } from '../../../config/utils.js';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginEmployee } from '../state/auth/authAction.jsx';

const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      termsAccepted: false,
    },
    mode: 'onChange',
  });

  const password = watch('password');

  const passwordStrength = useMemo(
    () => calculatePasswordStrength(password || ''),
    [password]
  );

  const onRegisterSubmit = async (formData) => {
    try {
      console.log('Registration data:', formData);

      // Replace this with your registration API.
      await new Promise((resolve) => setTimeout(resolve, 1200));

      alert('Account created successfully');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const onLoginSubmit = async (formData) => {
    try {
      dispatch(loginEmployee(formData));
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google');
  };

  const handleGithubLogin = () => {
    console.log('Continue with GitHub');
  };

  return {
    register,
    passwordStrength,
    handleSubmit,
    errors,
    isSubmitting,
    onRegisterSubmit,
    onLoginSubmit,
    handleGoogleLogin,
    handleGithubLogin,
    showPassword,
    setShowPassword,
    password,
    navigate,
  };
};

export default useAuth;
