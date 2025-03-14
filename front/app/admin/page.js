import AdminSidebar from '../components/admin/AdminSidebar'
import styles from '@/public/assets/scss/pages/admin.module.scss'
import Heading from '../components/Heading'
const AdminPage = () => {
    return (
        <main className={styles.admin}>
            <div className={styles.layout}>
                <Heading title={"BackOffice"}/>
            </div>
            <section className={styles.container}>
                <div className={styles.sidebarContainer}>
                    <AdminSidebar />
                </div>
                <div className={styles.content}>
                    admin page
                </div>
            </section>
        </main>
    )
}

export default AdminPage