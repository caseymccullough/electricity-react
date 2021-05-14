
import LoadBasicsForm from '../LoadBasicsForm';
import LoadList from '../LoadList/LoadList';


export default function LoadProfile(props) {

   const fakeLoads = [
      {
      "standbyWattage": 2,
      "_id": "609c3a0385a28933f7df5775",
      "name": "powertool",
      "wattage": 50
      },
      {
         "standbyWattage": 12,
         "_id": "609c3a0385a28933f7df5775",
         "name": "lightbulb",
         "wattage": 60
         }

   ]
   return (
      <div id="load-profile">
         <h1>Load Profile</h1>
         <LoadBasicsForm loadFormData = {props.loadFormData} setLoadFormData = {props.setLoadFormData}></LoadBasicsForm>
         <LoadList loads = {fakeLoads}></LoadList>

      </div>
       
      
   )




}