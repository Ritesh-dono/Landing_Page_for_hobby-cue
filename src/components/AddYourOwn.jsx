import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import "./addown.css";
const AddYourOwn = () => {
  return (
    <div className="add-your-own p-3 mb-2  text-primary-emphasis " >
   <div  className="border border-secondary-subtle rounded bg-light"><h2 className='ms-2 pt-2 me-2 fs-5'><FontAwesomeIcon icon={faPlusCircle}  className="clickable-icon" /> Add your own</h2>
      <p className="p-3 mb-2 text-primary-emphasis">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
     
      </p> <button className='btn btn-outline-primary ms-2 mb-3 mt-3'>
      Add new</button>
     </div>
    </div>
  );
};

export default AddYourOwn;
