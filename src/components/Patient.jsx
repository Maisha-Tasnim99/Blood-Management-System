import { useState, useEffect } from "react"
import {db} from '../firebase-config'
import { collection, getDocs, addDoc, doc, deleteDoc } from "@firebase/firestore";


const Patient = () => {


    // Getting all the patient from the database
    const [isLoading, setIsLoading] = useState(true)
    const [patient, setPatient] = useState([]);
  
    const userCollectionRef = collection(db, 'patient');


    const getUsers = async () => {

        try {
            const data = await getDocs(userCollectionRef);
            setPatient(data.docs.map((doc) => ({...doc.data(), id: doc.id}) )); 
        }

        catch(error) {
            console.log(error);
        }

        finally{
            setIsLoading(false);
        }
           
    }

    useEffect(() => {
        getUsers();

    }, [])







    
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

        

        // Clear all the input fields after submitting data and also clear the state

        clearFields(event);
   
        setNewName("");
      
        setNewAge("");
 
        setNewGender("");

        SetNewBloodGroup("");

        SetNewSchedule("");


        // fetch data after submitting

        getUsers();

        // close the Register a new User Section

        handleToggleShowing();

    }



     // delete a new user

     const deleteUser = async (id)  => {

         const userDoc = doc(db, "patient", id)

         await deleteDoc(userDoc);

            getUsers();

     }
  


    //  toggle registration section

    const [showing, setShowing] = useState("false");

    const handleToggleShowing = () => {
      setShowing(!showing);
    };

    


    return (
        
        <div>
           


        <div onClick={handleToggleShowing} className='-btn -h4 bg-s-t1a3 -shadow-xs font-600 w-[25rem] max-w-[90%] md:w-[40rem] md:max-w-[90%] m-auto'> Register a new User </div>
           
        

        
            {/* Adding Data */}
        {!showing && 
            <form onSubmit={createUser} className="_space-y-16px bg-s-t1a3 -shadow-xs _p-16px w-[25rem] max-w-[90%] md:w-[40rem] md:max-w-[90%] m-auto">

            

            <div>

                    <label htmlFor="name" className="-label-tag">Name</label>

                    <input onChange={newNameHandler} type="text" id="name" name="name" className="-input-tag" required/>
                
            </div>


            
            <div>

                    <label htmlFor="gender" className="-label-tag">Gender</label>

                    <input onChange={newGenderHandler}  type="text" id="gender" name="gender" className="-input-tag" required/>
                
            </div>


            
            <div>

                    <label htmlFor="age" className="-label-tag">Age</label>

                    <input onChange={newAgeHandler} type="number" id="age" name="age" className="-input-tag" required/>

            </div>


            <div>

                <label htmlFor="blood" className="-label-tag">Blood Group</label>

                <input onChange={newBloodGroupHandler} type="text" id="blood" name="blood" className="-input-tag" required/>

            </div>


            <div>

            <label htmlFor="date" className="-label-tag">Schedule to Receive Blood</label>

            <input onChange={newScheduleHandler} type="date" id="date" name="date" className="-input-tag" required/>

        </div>


            <button  type='submit' className='-btn -btn-md -btn-color-t1l1 font-600'> Submit</button>

            </form>

        }



           {/* Displaying Data */}


    
            <div className='_my-24px bg-s-t1a3 -shadow-xs w-[25rem] max-w-[90%] md:w-[40rem] md:max-w-[90%] m-auto'>



                <div className='text-center font-600 -h4 _my-16px '>Registered Patients Info</div>

                {isLoading && <p className='text-center -h4 animate-pulse'>Loading..</p>}

                {!isLoading && patient.map((user) =>{


                    return (


                        <div key={user.id} className="_space-y-16px bg-s-t1a3 -shadow-xs _p-16px  border-b-2 border-gray-l1a6">

                            <h4 className='bg-s-t1a4 -shadow-xs text-center font-600'>{user.name}</h4>
                            <p><span className='font-600'>Gender: </span>{user.gender}</p>
                            <p><span className='font-600'>Age: </span>{user.age}</p>
                            <p><span className='font-600'>Blood Group: </span>{user.bloodGroup}</p>
                            <p><span className='font-600'>Date to Receive Blood: </span>{user.schedule}</p>

                        <button onClick={() => {deleteUser(user.id)}} className='-btn -btn-sm -btn-color-t1l1 font-600 '>Delete</button>

            
                        </div>
                
                    )
                }   
            )}

            </div>

        
            
        </div>
    )
}

export default Patient
