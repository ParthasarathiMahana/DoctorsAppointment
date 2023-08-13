import React, { useEffect, useState } from 'react';
import db from '../firebase';
import { onSnapshot, collection, addDoc } from 'firebase/firestore';
import { useNavigate, useParams, Link} from 'react-router-dom';
import styles from '../styles/appointment.module.css';
const AppointmentPage = () => {

    const patId = useParams().patId;
    const deptId = useParams().deptId;
    const doctIndex = useParams().doctIndex;

    let [patientName, setPatientName] = useState('');
    let [dept, setDept] = useState('');
    let [doctName, setDoctName] = useState('');
    let [confirm, setConfirm] = useState(false);

    useEffect(()=>{
        onSnapshot(collection(db, "patients"), (patients)=>{
          let pName = '';
          patients.docs.map((patient)=>{
            if(patId === patient.id){
              pName = patient.data().name;
            }
          })
          setPatientName(pName);
        })
        onSnapshot(collection(db, "departments"), (departments)=>{
          let dept='';
          let doct ='';
          departments.docs.map((department)=>{
            if(department.id === deptId){
              dept = department.data().DepartmentName;
              doct = department.data().doctors[doctIndex].name;
            }
          })
          setDept(dept);
          setDoctName(doct);
        })
    },[])
    
    const handleConfirm = async()=>{
      await addDoc(collection(db, "appointments"),{
        doctor: doctName,
        patient: patientName,
        done: 'flase'
      })

      setConfirm(true);
    }

  return (
    <div className={styles.mainContainer}>
      
      {confirm && <div className={styles.messageContainer}>
        Congrats {patientName}, You Booked an Appointment with Dr.{doctName} of {dept} Department.
      </div>}
      {!confirm && <div className={styles.homeBtn}>
        <button type='submmit' onClick={handleConfirm}>Confirm your Appointment</button>
      </div>}
      {confirm && <div className={styles.homeBtn}>
        {<Link to='/'> <button type='submmit'>Go To Home</button> </Link>}
      </div>}
    </div>
  )
}

export default AppointmentPage;
