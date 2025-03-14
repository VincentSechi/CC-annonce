"use client"
import styles from '@/public/assets/scss/components/admin/adminSidebar.module.scss'
import SidebarLink from '@/app/components/sidebar/SidebarLink'
import Link from 'next/link'
import { signIn, signOut, useSession } from "next-auth/react";
import Button from '../Button';
const AdminSidebar = () => {
  return (
    <div className={styles.adminSidebar}>
      <div className={styles.container}>
        <SidebarLink href="/admin" text={"Dashboard"} />
        <SidebarLink href="/admin/categories" text={"Liste des catégories"} />
        <SidebarLink href="/admin/categories/creer-categorie" text={"Créer une catégorie"} />
        <Button onClick={() => signOut({ redirect: false })} text={"Déconnexion"} />
      </div>
    </div>
  )
}

export default AdminSidebar