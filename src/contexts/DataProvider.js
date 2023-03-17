import { useState, useEffect, createContext, useContext } from "react";
import { getFirestore, getDocs, collection, getDoc, doc, collectionGroup, query } from '@firebase/firestore'
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext()

export const DataProvider = function(props){
    const [cars, setCars] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()
    useEffect(() => {
        async function getCars(){
            const postQuery = query(collectionGroup(db, 'cars'))
            const querySnapshot = await getDocs(postQuery) 
            const loadedCars = []
            querySnapshot.forEach((doc) => {
                loadedCars.push({
                    id: doc.id,
                    uid: doc.ref.parent.id,
                    ...doc.data()
                })
            })
            setCars(loadedCars)
        }
        getCars()
    }, [])

    async function getCar(uid, id){
        const docRef = doc(db, 'cars', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        throw new Error
        }
        return docSnap.data()
    }
    
    const value = {
        cars,
        getCar 
    }
        
    


    return(
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}