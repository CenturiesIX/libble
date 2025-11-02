import { useId } from 'react';

type NumberInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const NumberInput = ({ label, value, onChange }: NumberInputProps) => {
  const id = useId();
  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        inputMode="decimal"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="1.2e3 or 1,200"
        aria-describedby={`${id}-hint`}
      />
      <span id={`${id}-hint`} className="sr-only">
        Supports scientific notation and comma separated numbers.
      </span>
    </label>
  );
};

export default NumberInput;
