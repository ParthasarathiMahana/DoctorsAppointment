import React, { useState } from 'react'
import styles from '../styles/patientform.module.css';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Patientform = () => {

  const [defaultName, setDefaultName] = useState("");
  const [defaultAge, setDefaultAge] = useState("");
  const [defaultGender, setDefaultGender] = useState("");
  const [defaultHealthIssue, setDefaultHealthIssue] = useState("");
  const [defaultPhone, setDefaultPhone] = useState("");

  const navigate = useNavigate();

  const handlePatientFormSubmit =async (e)=>{
    e.preventDefault();
    let id=null;

    // code for adding patients detail into the database
    await addDoc(collection(db, "patients"),{
      name:defaultName,
      age:defaultAge,
      gender:defaultGender,
      phone:defaultPhone,
      healthIssue:defaultHealthIssue
    }).then((value)=>{
      id = value.id;
    });

    setDefaultName("");
    setDefaultAge("");
    setDefaultGender("");
    setDefaultHealthIssue("");
    setDefaultPhone("");

    navigate(`/allDept/${id}`);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <p>Get Your Appointment Now</p>
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.patientForm} onSubmit={handlePatientFormSubmit}>
          <input type='text' placeholder='Name' value={defaultName} onChange={(e)=>setDefaultName(e.target.value)}></input>
          <input type='text' placeholder='age' value={defaultAge} onChange={(e)=>setDefaultAge(e.target.value)}></input>
          <input type='text' placeholder='gender' value={defaultGender} onChange={(e)=>setDefaultGender(e.target.value)}></input>
          <textarea rows="5" cols="50" placeholder='Describe your health issue...' 
          style={{marginBottom:"1rem", fontSize: "1rem",
           backgroundColor:"rgb(204, 204, 204)", border:"none", outline:"none"}} value={defaultHealthIssue} onChange={(e)=>setDefaultHealthIssue(e.target.value)}></textarea>
          <input type='text' placeholder='phone number' value={defaultPhone} onChange={(e)=>setDefaultPhone(e.target.value)}></input>
          <input type='submit' value='Submit' style={{width: '20%', cursor:"pointer"}} className={styles.submit}></input>
        </form>
      </div>
    </div>
  )
}

export default Patientform;
