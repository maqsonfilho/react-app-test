import React, { FC } from 'react';
import { SelectorColumnProps } from '~/@types/components/Table/selector-column-props';

import { SelectOption } from '~/@types/components/Table/table-body-props';
import { StyledOptions, StyledSelect } from './style';

export const SelectorColumn: FC<SelectorColumnProps> = ({ column, record }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (column.onSelectChange) {
      column.onSelectChange(e.target.value, record);
    }
  };

  return (
    <StyledSelect onChange={handleChange}>
      {column.selectOptions &&
        column.selectOptions.map((option: SelectOption, index: number) => (
          <StyledOptions key={index} value={option.value}>
            {option.label}
          </StyledOptions>
        ))}
    </StyledSelect>
  );
};
