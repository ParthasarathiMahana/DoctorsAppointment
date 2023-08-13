import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from '../styles/allDept.module.css';
import db from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

const AllDept = () => {

  let patId = useParams().id;
  let [departmentsArr, setDepartmentsArr] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    onSnapshot(collection(db, "departments"),(querySnapShots)=>{
      let dpts = querySnapShots.docs.map((snapShot)=>{
        return{
          idOfDoc: snapShot.id,
          ...snapShot.data()
        }
      });
      setDepartmentsArr(dpts);
    });
  },[]);

  const viewDoctors=(id)=>{
    const deptId = id;
    navigate(`/allDoctors/${patId}/${deptId}`);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.deptContainer}>

        {departmentsArr.map((dept, index)=>{
          return(
            <div className={styles.dptData} key={index}>
              <div className={styles.deptDetails}>
                <div className={styles.deptName}>
                  {dept.DepartmentName}
                </div>
                <div className={styles.abtDept}>
                  {dept.details}
                </div>
              </div>

              <div className={styles.Viewbtn}>
                <button onClick={()=>viewDoctors(dept.idOfDoc)}>View all Doctors</button>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default AllDept;
