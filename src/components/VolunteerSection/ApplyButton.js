import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ParticipationForm from './ParticipationForm';
import Slide from '@mui/material/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ApplyButton({ onApply ,event}) {

    const [buttonText, setButtonText] = useState('Apply'); 

    useEffect(() => {
    const storedButtonText = localStorage.getItem(`appliedButtonText_${event.id}`);
    if (storedButtonText) {
      setButtonText(storedButtonText);
    }
  }, [event.id]); // Dependency array ensures the effect runs whenever event.id changes

  const handleButtonClick = () => {
    setOpen(false);
    // Update the button text when clicked
    setButtonText('Applied!');
    localStorage.setItem(`appliedButtonText_${event.id}`, 'Applied!'); // Store the applied state in local storage
  };
    // this is for the particiaption form
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} >
      { buttonText ? buttonText : <h6>Apply</h6>}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <ParticipationForm func={handleButtonClick} onApply={onApply} event={event}/>
      
      </Dialog>
    </div>
  );
}