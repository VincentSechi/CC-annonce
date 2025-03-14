"use client"

import { useState, useEffect } from 'react';
import styles from '@/public/assets/scss/components/forms/addCategoryForm.module.scss';
import InputField from './InputField';
import { useSession } from 'next-auth/react';

const AddCategoryForm = () => {
    const { data } = useSession();
    let token;

    if (data) {
        token = data.accessToken;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const [formData, setFormData] = useState({
        name: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)

        const isFormValid =
            formData.name

        if (isFormValid) {
            try {
                console.log(token);
                
                const response = await fetch(`http://localhost:8000/api/categories`, {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-type" : "Application/json"
                    }
                });
            } catch (error) {
                console.log(error)
            }
        }
    }


    return (
        <div className={styles.addCategoryForm}>
            {token && <form onSubmit={handleSubmit} method='post'>
                <div className={styles.row}>
                    <InputField
                        labelText={"Nom"}
                        inputId={'name'}
                        inputName={'name'}
                        type={'text'}
                        placeholder={'Nom de la catégorie'}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type='submit' className={styles.submitButton} onClick={handleSubmit}>
                    Poster
                </button>
            </form>}
        </div>
    )
}

export default AddCategoryForm