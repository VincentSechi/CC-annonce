"use client"
import styles from '@/public/assets/scss/components/forms/inputField.module.scss';

const InputField = ({
    labelText,
    inputId,
    inputName,
    type,
    disabled,
    placeholder,
    options,
    required,
    select = false,
    onChange,
    value,
    ...props
}) => {
    return (
        !select
            ?
            <div className={styles.inputField}>
                <label className={styles.label} htmlFor={inputName}>
                    {labelText}
                </label>
                <input
                    id={inputId}
                    name={inputName}
                    type={type ?? 'text'}
                    disabled={disabled}
                    required={required}
                    onChange={onChange}
                    value={value}
                />
            </div>
            :
            <div className={styles.inputField}>
                <label className={styles.label} htmlFor={inputName}>
                    {labelText}
                </label>
                <select
                    name={inputName}
                    id={inputId}
                    required={required}
                    onChange={onChange}
                    value={value}
                >
                    <option value="" disabled>
                        sélectionner une catégorie
                    </option>
                    {options && options.map((option, index) => {
                        return(
                            <option key={index} value={option.id}>
                                {option.name}
                            </option>
                        )
                    })}
                </select>
            </div>
    )
}

export default InputField