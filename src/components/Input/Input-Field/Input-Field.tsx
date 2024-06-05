import { forwardRef } from 'react';

import { InputProps } from '~/@types/components/Input/input-props';
import { StyledInput } from './style';

export const InputField = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, hasError, maxLength, name, onChange, type, placeholder, value }, ref) => {
    const inputClassName = hasError ? `${className} error` : className;

    return (
      <StyledInput
        className={inputClassName}
        type={type}
        disabled={disabled}
        maxLength={maxLength}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        ref={ref}
      />
    );
  },
);
