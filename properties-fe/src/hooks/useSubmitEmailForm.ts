import { forgotPassword } from '@http';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useSubmitEmailForm = () => {
  const defaultValues = {
    email: '',
  };

  const form = useForm<{ email: string }>({ defaultValues });

  const { control, formState, handleSubmit, setError } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const handleSubmitForm = async (data) => {
    try {
      await forgotPassword(data);
      navigate('/forgot-password');
    } catch (error) {
      setError('email', {
        type: 'manual',
        message: 'невалиден имейл',
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

export default useSubmitEmailForm;
