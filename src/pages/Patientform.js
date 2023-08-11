import styles from '../styles/patientform.module.css';

import React from 'react'

const Patientform = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <p>Get Your Appointment Now</p>
      </div>
      <div className={styles.formWrapper}>
        <form className={styles.patientForm}>
          <input type='text' placeholder='Name'></input>
          <input type='text' placeholder='age'></input>
          <input type='text' placeholder='gender'></input>
          <textarea rows="5" cols="50" placeholder='Describe your health issue...' 
          style={{marginBottom:"1rem", fontSize: "1rem",
           backgroundColor:"rgb(204, 204, 204)", border:"none", outline:"none"}}></textarea>
          <input type='text' placeholder='phone number'></input>
          <input type='submit' value='Submit' style={{width: '20%', cursor:"pointer"}} className={styles.submit}></input>
        </form>
      </div>
    </div>
  )
}

export default Patientform
