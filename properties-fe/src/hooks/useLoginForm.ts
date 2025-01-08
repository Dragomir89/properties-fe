import { login } from '@http';
import { LoginFormValues } from '@types';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useLoginForm = () => {
  const defaultValues: LoginFormValues = {
    email: 'drashoo@abv.bg',
    password: 'testtest1',
  };

  const form = useForm<LoginFormValues>({ defaultValues });
  const { control, formState, handleSubmit, setError } = form;
  const { errors } = formState;

  const navigate = useNavigate();
  const handleSubmitForm = async (data: LoginFormValues) => {
    try {
      await login(data);
      navigate('/');
    } catch (err) {
      setError('email', {
        type: 'manual',
        message: 'Невеадма парола или имейл',
      });
      setError('password', {
        type: 'manual',
        message: 'Невеадма парола или имейл',
      });
    }
  };

  return {
    control,
    handleSubmitForm,
    handleSubmit,
    errors,
  };
};
export default useLoginForm;
