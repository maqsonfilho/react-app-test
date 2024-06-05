import { FC } from 'react';
import { ErrorContainer } from './styled';

interface InputErrorProps {
  errorDescription?: string;
}

export const InputError: FC<InputErrorProps> = ({ errorDescription }) => {
  return errorDescription ? <ErrorContainer className="error-message">{errorDescription}</ErrorContainer> : null;
};
