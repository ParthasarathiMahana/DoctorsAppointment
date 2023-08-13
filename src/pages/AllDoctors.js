import React, { useEffect, useState } from 'react';
import db from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "../styles/allDocts.module.css";

const AllDoctors = () => {

    let [doctors, setDoctors] = useState([]);
    const patId = useParams().patId;
    const deptId = useParams().deptId;
    const navigate = useNavigate();

    useEffect(()=>{
        onSnapshot(collection(db, 'departments'), (snapshot)=>{
            let doctorList = [];
            snapshot.docs.map((doc)=>{
                if(doc.id === deptId){
                    let p=[];
                    doc.data().doctors.map((docr, index)=>{
                        p.push(docr.name);
                        p.push(docr.experience);
                        p.push(docr.rating);
                        p.push(index);
                        doctorList.push(p);
                        p=[];
                    })
                    return doc.data().doctors;
                }
            })
            setDoctors(doctorList);
        })
    },[]);

    const handleCreateAppointment = (indexOfDoc)=>{
        navigate(`/appointment/${patId}/${deptId}/${indexOfDoc}`);
    }

  return (
    <div className={styles.mainContainer}>
        {doctors.map((d, index)=>{
            return(
                <div className={styles.doctDetails} key={index}>
                    <div className={styles.nameAndExp}>
                        <div className={styles.name}>Name:{d[0]}</div>
                        <div className={styles.Exp}>Experience: {d[1]}</div>
                    </div>
                    <div className={styles.rating}>Rating: {d[2]}</div>
                    <div className={styles.appointmentBtn}>
                        <button type='submit' onClick={()=>{handleCreateAppointment(d[3])}}>Book Appointment</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default AllDoctors;