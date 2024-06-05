import { IonIcon } from '@ionic/react';
import { caretDownOutline, caretUpOutline } from 'ionicons/icons';
import React, { FC, Fragment, useState } from 'react';
import { SelectCustomProps } from '~/@types/components/Select/select-custom-props';
import { SelectLabel } from '../Select-Label/select-label';
import { ContainerSelect, ContentSelect, DropdownSelector, Icon, SpanSelect } from './style';

export const SelectCustom: FC<SelectCustomProps> = ({ children, onChange, label }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
    setIsOpen(false);
  };

  //clones each child and adds the onSelect property to it.
  // onSelect is the function that will be called when the option is selected.
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child as React.ReactElement<any>, { onSelect: handleOptionChange }),
  );

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {label && <SelectLabel label={label} />}
      <Fragment>
        <ContainerSelect>
          <ContentSelect>
            <SpanSelect>{selectedOption || 'Selecionar perfil de acesso'}</SpanSelect>
          </ContentSelect>

          <Icon onClick={toggleOpen}>
            {isOpen ? <IonIcon icon={caretUpOutline} /> : <IonIcon icon={caretDownOutline} />}
          </Icon>

          {isOpen && <DropdownSelector>{childrenWithProps}</DropdownSelector>}
        </ContainerSelect>
      </Fragment>
    </Fragment>
  );
};
