"use client"
import styles from '@/public/assets/scss/components/header/header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { useState, useEffect } from 'react';
const Header = () => {

    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)
    const session = useSession();

    useEffect(() => {
        if (session.status === "authenticated") {
            setIsAuth(true)
            if (session.data.role === "admin") {
                setIsAdmin(true)
            }
        }
    }, [session])


    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    <Link href="/" className={styles.homeLogo}>
                        Home
                    </Link>
                    {!isAuth
                        ?
                        <div className={styles.navLinks}>
                            <div className={styles.navLink}>
                                <Link href={"/login"}>
                                    Se connecter
                                </Link>
                            </div>
                            <div className={styles.navLink}>
                                <Link href={"/register"}>
                                    S'inscrire
                                </Link>
                            </div>
                        </div>
                        :
                        <div className={styles.navLinks}>
                            <div className={styles.navLink}>
                                <Link href={"/profile"}>
                                    Mon profil
                                </Link>
                            </div>
                            <div className={styles.navLink}>
                                <Link href={"/creer-annonce"}>
                                    Poster une annonce
                                </Link>
                            </div>
                            {isAdmin &&
                                <div className={styles.navLink}>
                                    <Link href={"/admin"}>
                                        Admin
                                    </Link>
                                </div>
                            }
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header