import styles from '@/public/assets/scss/components/sidebar/sidebarLink.module.scss'
import Link from 'next/link'
const SidebarLink = ({href, text, target}) => {
    return (
        <Link
            href={href}
            target={target}
            className={styles.link}
        >
            {text}
        </Link>
    )
}

export default SidebarLink