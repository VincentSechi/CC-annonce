"use client"
import styles from '@/public/assets/scss/components/latestAnnoucements.module.scss'
import Link from 'next/link'
import Image from 'next/image'
const LatestAnnouncements = ({ data }) => {
    return (
        <section className={styles.latestAnnouncements}>
            {data && data.map((announcement, index) => {
                console.log(announcement);
                return (
                    <Link href="/" key={index} className={styles.container}>
                        <div className={styles.imageContainer}>
                            <Image src={announcement.image_url} fill sizes='100%' />
                        </div>
                        <div>
                            <div className={styles.heading}>
                                <h4>{announcement.title}</h4>
                                <p>{announcement.description}</p>
                            </div>
                            <div className={styles.details}>
                                <p>Prix: <span>{announcement.price}</span></p>
                                <p>Catégorie: <span>{announcement.category_name}</span></p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}

export default LatestAnnouncements