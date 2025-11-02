import type { Dimension } from '@unit-convert/convert-core';

type CategoryPickerProps = {
  categories: Dimension[];
  value: Dimension;
  onChange: (value: Dimension) => void;
};

const CategoryPicker = ({ categories, value, onChange }: CategoryPickerProps) => {
  return (
    <label htmlFor="category-picker">
      Category
      <select
        id="category-picker"
        value={value}
        onChange={(event) => onChange(event.target.value as Dimension)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.replace(/-/g, ' ')}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CategoryPicker;
