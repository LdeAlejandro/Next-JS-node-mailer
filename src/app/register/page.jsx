'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { RegisterUser } from '../../utils/RegisterUser/RegisterUser';
import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.css';

export default function Home() {

  const [formData, setFormData] = useState({name:"", username: "", email: "", password:""})
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();
  const session = useSession();

  const onChangeHandle =(e) =>{
    const {name, value} = e.target;
    setFormData(prevState => 
      ({...prevState, 
      [name]: value}))
      
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

     // Call RegisterUser function and handle response
     const result = await RegisterUser(formData.name, formData.username, formData.email, formData.password);

     if (result.success) {
       setSuccessMessage('Account has been created');
       router.push('/register?success=Account has been created');
     
       signIn("credentials", {email: formData.email, password: formData.password})
     } else {
       setError(result.message || 'An unknown error occurred');
     }
  }


  
  if(session.status === "loading"){
    return <p>Loading...</p>;
  }

  if(session.status === "authenticated"){
    router?.push("/my-profile");
    console.log(session.status);
  }

  return (
    <div className={styles.container}>Register
    <form className= {styles.form} onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="nome" className={styles.input} onChange={onChangeHandle} required />
      <input name = "username" type="text" placeholder="nome de usuario" className={styles.input} onChange={onChangeHandle} required />
      <input name="email" type="email" placeholder="email" className={styles.input} onChange={onChangeHandle} required />
      <input name="password" type="password" placeholder='password' className={styles.input} onChange={onChangeHandle} required />
      <button className={styles.button}>Register</button>
      {error && "Something went wrong!"}
      {successMessage && 'User created'}
    </form>
    {/*<Link href="dashboard/login">Login with an existing account</Link>*/}
  </div>
  );
}
