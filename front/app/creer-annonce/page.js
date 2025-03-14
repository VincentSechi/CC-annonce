import styles from '@/public/assets/scss/pages/creer-annonce.module.scss'
import PostAnnouncementForm from '../components/forms/PostAnnouncementForm'
import Heading from '../components/Heading'

const getCategories = async() => {
    const res = await fetch(`${process.env.API}/categories`);
    const data = await res.json();
    return data;
  }

const page = async () => {
    const categories =  await getCategories();
    return (
        <main className={styles.creerAnnonce}>
            <Heading title={"Poster une annonce"}/>
            <PostAnnouncementForm categories={categories}/>
        </main>
    )
}

export default page