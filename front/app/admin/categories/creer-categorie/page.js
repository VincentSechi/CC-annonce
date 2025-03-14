import AdminSidebar from '@/app/components/admin/AdminSidebar'
import styles from '@/public/assets/scss/pages/creer-categorie.module.scss'
import Heading from '@/app/components/Heading'
import AddCategoryForm from '@/app/components/forms/AddCategoryForm'

const CreateCategory = () => {
  return (
    <main className={styles.creerCategorie}>
        <div className={styles.layout}>
            <Heading title={"Créer une catégorie"}/>
        </div>
        <section className={styles.container}>
            <div className={styles.sidebarContainer}>
                <AdminSidebar />
            </div>
            <div className={styles.content}>
                <AddCategoryForm />
            </div>
        </section>
    </main>
)
}

export default CreateCategory