import React, {useState} from 'react'

const EditForm = ({task, onSave, onCancel}) => {
    const [text, setText] = useState(task.text);
    const [day, setDay] = useState(task.day); 
    const [reminder, setReminder] = useState(task.reminder);

    const onSubmit = (e) => {
        e.preventDefault();
        
        // Ensure the task is not empty
        if (!text || !day) {
            alert("Please fill in both fields");
            return;
        }

        // Create an updated task object and pass it to the onSave function
        onSave({...task, text, day, reminder});
    }

  return (
    <form action="" className='edit-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="">Task</label>
            <input 
                type="text" 
                placeholder='Edit Tasks' 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
            />
        </div>
        <div className="form-control">
            <label htmlFor="">Day & Time</label>
            <input 
                type="text" 
                placeholder='Edit Day & Time'
                value={day} 
                onChange={(e) => setDay(e.target.value)} 
            />
        </div>
        <div className="form-control form-control-check">
            <label htmlFor="">Set Reminder</label>
            <input 
                type="checkbox"
                checked={reminder} 
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
        </div>

        <input type="submit" value="Save Task" className='btn btn-block' />
        <button onClick={onCancel} className='btn btn-block btn-cancel'>
            Cancel
        </button>
    </form>
  )
}

export default EditForm
