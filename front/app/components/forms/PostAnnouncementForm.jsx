"use client"

import { useState, useEffect } from 'react';
import styles from '@/public/assets/scss/components/forms/postAnnouncementForm.module.scss';
import InputField from './InputField';
import { useSession } from 'next-auth/react';

const PostAnnouncementForm = ({ categories }) => {
    const { data } = useSession();
    let token;

    if (data) {
        token = data.accessToken;
    }

    const handleChange = (e) => {
        
        const { name, value, files } = e.target;
        if (name === 'image' && files) {
            setFormData((prevData) => ({
                ...prevData,
                image: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

        const [formData, setFormData] = useState({
            title: "",
            description: "",
            price: "",
            category_id: "",
            image: "",
        })

        const handleSubmit = async (e) => {
            e.preventDefault();

            const isFormValid = 
                formData.title &&
                formData.description &&
                formData.price &&
                formData.category_id

            if(isFormValid){
                const form = new FormData();
                form.append("title", formData.title);
                form.append("description", formData.description);
                form.append("price", formData.price);
                form.append("category_id", formData.category_id);
                form.append("user_id", data.id);
    
                if (formData.image) {
                    form.append("image", formData.image);
                }

                if(form){
                    try {
                        const response = await fetch(`http://localhost:8000/api/annonces`, {
                            method: "POST",
                            body: form,
                            headers:{
                                "Authorization" : `Bearer ${token}`
                            }
                        });
                    } catch (error) {
                        console.log(error)
                    }
                }
            }

            

        }


        return (
            <div className={styles.postAnnouncementForm}>
                {token && <form onSubmit={handleSubmit} method='post' encType='multipart/form-data'>
                    <div className={styles.row}>
                        <InputField
                            labelText={"Titre"}
                            inputId={'title'}
                            inputName={'title'}
                            type={'text'}
                            placeholder={'Titre de l\'annonce'}
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            labelText={"Description"}
                            inputId={'description'}
                            inputName={'description'}
                            type={'text'}
                            placeholder={'Description de l\'annonce'}
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.row}>
                        <InputField
                            labelText={"Prix"}
                            inputId={'price'}
                            inputName={'price'}
                            type={'number'}
                            placeholder={'Prix'}
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                        <InputField
                            labelText={"Catégorie"}
                            inputId={"category_id"}
                            inputName={"category_id"}
                            select={true}
                            options={categories}
                            value={formData.category_id}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.inputFile}>
                            <label className={styles.label} htmlFor={"image"}>
                                Image
                            </label>
                            <input
                                id={"image"}
                                name={"image"}
                                type={"file"}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <button type='submit' className={styles.submitButton} onClick={handleSubmit}>
                        Poster
                    </button>
                </form>}
            </div>
        )
    }

    export default PostAnnouncementForm