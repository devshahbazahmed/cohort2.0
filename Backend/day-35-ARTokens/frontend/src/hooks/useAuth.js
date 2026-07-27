import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { axiosInstance } from '../config/axiosInstance';
import { useDispatch } from 'react-redux';
import { addUser } from '../state/authReducer';

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/api/v1/users/login', data);
      console.log('Response in login ', response);
      dispatch(addUser(response.data.user));
    } catch (error) {
      console.log('Error is login', error);
    }
  };

  const onRegisterSubmit = async (data) => {
    try {
      const response = await axiosInstance.post('/api/v1/users/register', data);
      console.log('Response in register ', response);
      dispatch(addUser(response.data.user));
    } catch (error) {
      console.log('Error is register', error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    onLoginSubmit,
    onRegisterSubmit,
  };
};

export default useAuth;
