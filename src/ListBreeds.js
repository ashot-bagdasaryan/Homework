import { useEffect,useState } from "react"
import { LIST_BREEDS } from "./apiConsts"



function ListBreeds (){
const [lists,setLists]=useState([])
useEffect(()=>{
    const getBreedList=(breed)=>{
        fetch(LIST_BREEDS)
        .then((response)=>response.json)
        .then((data)=>Object.keys(data.message))
    }
    getBreedList()
},[])
return(
    <ul>
        {lists.map((list)=>(
            <li >{list}</li>
        ))
        }
    </ul>
)
}
export default ListBreeds