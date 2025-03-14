import styles from '@/public/assets/scss/components/button.module.scss'
const Button = ({text, onClick, type}) => {
  return (
    <div>
        {type === "submit"
        ? <button onClick={onClick} className={styles.button}>{text}</button>
        : <div onClick={onClick} className={styles.button}>{text}</div>
        }
    </div>
  )
}

export default Button