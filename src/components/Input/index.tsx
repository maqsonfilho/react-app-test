import styled from 'styled-components';

import { FC, forwardRef, useState } from 'react';
import { InputProps } from '~/@types/components/Input/input-props';

import { InputField } from './Input-Field/Input-Field';
import { InputLabel } from './Input-Label/Input-Label';
import { InputPasswordVisibilityToggle } from './Input-Password-Visibility-Toggle/input-password-visibility-toggle';

// Defining a container for the password visibility icon
const InputPasswordVisibilityToggleContainer = styled.div`
  position: absolute;
  top: 38px;
  right: 10px;
`;

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      onKeyDown,
      errorDescription,
      hasError,
      label,
      type,
      maxLength,
      name,
      onChange,
      placeholder,
      value,
    },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <div className={className} style={{ position: 'relative' }}>
        <InputLabel label={label} value={value} onChange={onChange} />
        <InputField
          ref={ref}
          className={className}
          type={type === 'password' && isPasswordVisible ? 'text' : type} // Change type to text if password is visible
          disabled={disabled}
          maxLength={maxLength}
          name={name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          value={value}
          hasError={hasError}
        />
        {errorDescription && <div>{errorDescription}</div>}
        {type === 'password' && ( // Renders the visibility icon only when the field type is password
          <InputPasswordVisibilityToggleContainer>
            <InputPasswordVisibilityToggle isVisible={isPasswordVisible} onIconClick={togglePasswordVisibility} />
          </InputPasswordVisibilityToggleContainer>
        )}
      </div>
    );
  },
);
