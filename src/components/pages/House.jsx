import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const House = () => {
  const { state: { house } } = useLocation()




  const [isEdit, setIsEdit] = useState(false);
  const [updatedHouse, setUpdatedHouse] = useState(house);

  const onUpdateHouse = (value) => {
  
    setUpdatedHouse((prev) => ({
      ...prev,
      ...value,
      type_id: house.type.uuid,
      available_from: '2022-12-11'
    }))
  }

  
// here i wanted to make a function that saves the changes but i couldnt reach the api
//   const onSave = () => {
//     axios.put(`https://assignment.prosperty-mgmt.dev/v1/listings/${house.uuid}`, updatedHouse)
//       .then(response => {
//       })
//   }


  return (
    <table >
      <thead>
        <tr>
          <th>title</th>
          <th>type</th>
          <th>street</th>
          <th>street number</th>
          <th>postal code</th>
          <th>description</th>
          <th>created at</th>
          <th>updated at</th>
          <th>{isEdit ? 'Save' : 'Edit'}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" defaultValue={house?.title} onChange={(e) => onUpdateHouse({ title: e.target.value })} disabled={!isEdit} />
          </td>
          <td>
            <input type="text" defaultValue={house?.type.name} onChange={(e) => onUpdateHouse({ type: { name: e.target.value } })} disabled={!isEdit} />
          </td>
          <td>
            <input type="text" defaultValue={house?.street} onChange={(e) => onUpdateHouse({ street: e.target.value })} disabled={!isEdit} />
          </td>
          <td>
            <input type="text" defaultValue={house?.street_number} onChange={(e) => onUpdateHouse({ street_number: e.target.value })} disabled={!isEdit} />
          </td>
          <td>
            <input type="text" defaultValue={house?.postal_code} onChange={(e) => onUpdateHouse({ postal_code: e.target.value })} disabled={!isEdit} />
          </td>
          <td>
            <input type="text" defaultValue={house?.description} onChange={(e) => onUpdateHouse({ description: e.target.value })} disabled={!isEdit} />
          </td>
          <td> {house?.created_at}</td>
          <td> {house?.updated_at}</td>
          <td className="icon" onClick={() => setIsEdit(!isEdit)}>save/edit
            {/* <FontAwesomeIcon icon={isEdit ? faSave : faEdit} onClick={() => isEdit && onSave()} /> */}
          </td>
        </tr>
      </tbody>
    </table>)
}

export default House;
