import styles from '@/public/assets/scss/components/footer/footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div>
                Brand
            </div>
            <div>
                Copyrights
            </div>
        </div>
    </footer>
  )
}

export default Footer