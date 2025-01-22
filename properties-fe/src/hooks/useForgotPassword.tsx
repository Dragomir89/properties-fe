import { resetPassword } from '@http';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface ResetPasswordFormValues {
  newPassword: string;
  confirmPassword: string;
  token: string;
}

const useForgotPassword = () => {
  const defaultValues: ResetPasswordFormValues = {
    newPassword: '',
    confirmPassword: '',
    token: ''
  };

  const form = useForm<ResetPasswordFormValues>({ defaultValues });
  const { control, formState, handleSubmit, setError } = form;
  const { errors } = formState;

  const navigate = useNavigate();
  const handleSubmitForm = async (data: ResetPasswordFormValues) => {
    const ERROR_MESSAGE = 'Възникна грешка при промяната на паролата';
    const LOGIN_ROUTE = '/login';

    if (data.newPassword !== data.confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Паролите не съвпадат',
      });
      return;
    }

    try {
        await resetPassword({
        password: data.newPassword,
        token: data.token
      });
      navigate(LOGIN_ROUTE);
    } catch (err) {
      setError('token', {
        type: 'manual',
        message: ERROR_MESSAGE,
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

export default useForgotPassword;
