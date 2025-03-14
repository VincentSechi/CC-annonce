"use client"

import AdminSidebar from '@/app/components/admin/AdminSidebar'
import styles from '@/public/assets/scss/pages/categories.module.scss'
import Heading from '@/app/components/Heading'
import Trash from '@/public/assets/images/trash-solid.svg'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react';


const CategoriesList = () => {

    const { data } = useSession();
        let token;
    
        if (data) {
            token = data.accessToken;
        }

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const res = await fetch("http://localhost:8000/api/categories");
        const data = await res.json();
        setCategories(data);
    }

    const deleteCategory = async (id) => {
        
        const res = await fetch(`http://localhost:8000/api/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Content-type" : "Application/json"
            }
        });
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <main className={styles.categories}>
            <div className={styles.layout}>
                <Heading title={"Liste des catégories"} />
            </div>
            <section className={styles.container}>
                <div className={styles.sidebarContainer}>
                    <AdminSidebar />
                </div>
                <div className={styles.content}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories && categories.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {category.name}
                                        </td>
                                        <td className={styles.manageUser}>
                                            <div className={styles.bin} onClick={() => deleteCategory(category.id)}>
                                                <Image src={Trash} width={20} height={20} alt="bin" />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}

export default CategoriesList