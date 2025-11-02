import { useId, useMemo } from 'react';
import type { UnitDef } from '@unit-convert/convert-core';

type UnitSelectProps = {
  label: string;
  units: UnitDef[];
  value?: string;
  onChange: (symbol: string) => void;
};

const UnitSelect = ({ label, units, value, onChange }: UnitSelectProps) => {
  const id = useId();
  const datalistId = `${id}-options`;
  const options = useMemo(
    () =>
      units.map((unit) => ({
        label: `${unit.name} (${unit.symbol})`,
        value: unit.symbol
      })),
    [units]
  );

  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        list={datalistId}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        aria-autocomplete="list"
        role="combobox"
      />
      <datalist id={datalistId}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </datalist>
    </label>
  );
};

export default UnitSelect;
