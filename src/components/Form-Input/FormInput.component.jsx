import './FormInput.styles.scss';

export default function FormInput({
  label,
  name,
  id,
  value,
  type,
  handleChange,
}) {
  return (
    <div className='group'>
      <input
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
        <label
          className={`${value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
    </div>
  );
}
