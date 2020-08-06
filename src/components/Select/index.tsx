import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes < HTMLSelectElement > {
  name: string;
  label: string;
  options: Array < { 
    value: string;
    label: string;
  } >;
};

const Select: React.FC < SelectProps > = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={ label }>{ label }</label>
      <select value="" id={ name }  {...rest}>
      <option> Selecione uma opção </option>

        { options.map( (option, index) => {
          return <option key={ index } value={ option.value }>{ option.label }</option>
        }) }
      </select>
    </div>
  );
}

export default Select;