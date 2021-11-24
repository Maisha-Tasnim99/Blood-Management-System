import { useState, useEffect } from "react"
import {db} from '../firebase-config'
import { collection, getDocs, addDoc, doc, deleteDoc } from "@firebase/firestore";
import { async } from "@firebase/util";


const PatientRegistration = () => {



    const [users, setUsers] = useState([]);

    const userCollectionRef = collection(db, 'users');


 
  // Adding a new user

  const [newName, setNewName] = useState('');
  const [newGender, setNewGender] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [newBloodGroup, SetNewBloodGroup] = useState('');
  const [newSchedule, SetNewSchedule] = useState('');

  const newNameHandler = (event) => {
      setNewName(event.target.value)
  }

  const newGenderHandler = (event) => {
      setNewGender(event.target.value)
  }

  const newAgeHandler = (event) => {
      setNewAge(event.target.value)
  }

  const newBloodGroupHandler = (event) => {
    SetNewBloodGroup(event.target.value)
}

const newScheduleHandler = (event) => {
    SetNewSchedule(event.target.value)
}

  const clearFields = (event) => {

    Array.from(event.target).forEach((e) => (e.value = ""));
  }


    const createUser = (event) =>{

        event.preventDefault();

         addDoc(userCollectionRef, {name: newName, gender:newGender, age: Number(newAge), bloodGroup: newBloodGroup, schedule: newSchedule })

        
        clearFields(event);
   
        setNewName("");
      
        setNewAge("");
 
        setNewGender("");

        SetNewBloodGroup("");

        SetNewSchedule("");

       

    }




    


    return (
        
        <div>
           


        <button className='-btn -btn-lg -btn-color-t1l1 font-600'> Register a new User </button>
           
        

        
            {/* Adding Data */}

            <form onSubmit={createUser} className="_space-y-16px bg-s-t1a3 -shadow-xs _p-16px w-[25rem] max-w-[90%] md:w-[40rem] md:max-w-[90%] m-auto">

            

            <div>

                    <label htmlFor="name" className="-label-tag">Name</label>

                    <input onChange={newNameHandler} type="text" id="name" name="name" className="-input-tag"/>
                
            </div>


            
            <div>

                    <label htmlFor="gender" className="-label-tag">Gender</label>

                    <input onChange={newGenderHandler}  type="text" id="gender" name="gender" className="-input-tag"/>
                
            </div>


            
            <div>

                    <label htmlFor="age" className="-label-tag">Age</label>

                    <input onChange={newAgeHandler} type="number" id="age" name="age" className="-input-tag"/>

            </div>


            <div>

                <label htmlFor="blood" className="-label-tag">Blood Group</label>

                <input onChange={newBloodGroupHandler} type="text" id="blood" name="blood" className="-input-tag"/>

            </div>


            <div>

            <label htmlFor="date" className="-label-tag">Blood Donation Date</label>

            <input onChange={newScheduleHandler} type="date" id="date" name="date" className="-input-tag"/>

        </div>


            <button type='submit' className='-btn -btn-md -btn-color-t1l1 font-600'> Submit</button>

            </form>



            
        </div>
    )
}

export default PatientRegistration