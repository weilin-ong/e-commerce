import './FormInput.styles.scss';

export default function FormInput({ label, name, value, type, handleChange }) {
  return (
    <div className='group'>
      <input
        className='form-input'
        required
        autoComplete='off'
        id={name}
        type={type}
        name={name}
        value={value}
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
