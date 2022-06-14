import { Group, Input, FormInputLabel } from './FormInput.styles';

export default function FormInput({
  label,
  name,
  id,
  value,
  type,
  handleChange,
}) {
  return (
    <Group>
      <Input
        className='form-input'
        required
        autoComplete='off'
        name={name}
        value={value}
        id={id}
        type={type}
        onChange={handleChange}
      />
      {/* place label after input for styling purpose */}
      {label && (
        <FormInputLabel shrink={value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
