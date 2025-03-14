import React from 'react'
import styles from '@/public/assets/scss/components/heading.module.scss'
const Heading = ({title}) => {
  return (
    <section className={styles.globalHeading}>
        <h1>{title}</h1>
    </section>
  )
}

export default Heading