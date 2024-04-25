import React from 'react';

const Popup = ({ event, onClose }) => {
  const { name, EventName, Amount, StartDate, CompanyName, Requirement, EndDate, imageUrl,numberOfPeople,Location } = event;
  const currentDate = new Date();
  const startDate = new Date(StartDate);
  const endDate = new Date(EndDate);

  let progressPercentage = 0;
  let statusMessage = '';

  if (currentDate >= startDate && currentDate <= endDate) {
    const durationInDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const elapsedDays = Math.ceil((currentDate - startDate) / (1000 * 60 * 60 * 24));
    progressPercentage = (elapsedDays / durationInDays) * 100;
    statusMessage = 'In Progress';
  } else if (currentDate < startDate) {
    statusMessage = 'Has Not Started Yet';
  } else {
    statusMessage = 'Expired';
  }

  const popupContainerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background to create the blur effect
    zIndex: '9999',
  };

  const popupContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'auto',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const closeBtnStyle = {
    position: 'fixed',
    top: '-5px',
    right: '0',
    textDecoration : 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '30px',
    fontWeight:'bold',
    color: 'black',
  };

  const progressBarStyle = {
    width: '100%',
    height: '10px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    position: 'relative',
    marginBottom: '20px',
    display: statusMessage === 'In Progress' ? 'block' : 'none',
  };

  const progressIndicatorStyle = {
    height: '100%',
    width: `${progressPercentage}%`,
    backgroundColor: 'blue',
    borderRadius: '10px',
    transition: 'width 0.5s ease',
  };

  return (
    <div className="popup-container" style={popupContainerStyle}>
      <div className="popup" style={popupContentStyle}>
        <a className="close-btn" style={closeBtnStyle} onClick={onClose}>×</a>
        {imageUrl && <img src={imageUrl} alt={EventName} style={{ width: '100%', marginBottom: '20px'}} />}
        <h2>{EventName}</h2>
        <div className='text-start '>
         <p><strong>Organizer:</strong> {name}</p>
        <p><strong>Company:</strong> {CompanyName}</p>
        <p><strong>Location:</strong> {Location}</p>
        <p><strong>Amount:</strong> {Amount}</p>
        <p><strong>Start Date:</strong> {StartDate}</p>
        <p><strong>End Date:</strong> {EndDate}</p>
        <p><strong>Requirement:</strong> {Requirement}</p>
        </div>
        <strong>Status</strong>
        <div style={progressBarStyle}>
          <div style={progressIndicatorStyle}></div>
        </div>
        <p style={{ color: 'red', display: statusMessage === 'Expired' ? 'block' : 'none' }}>Expired</p>
        <p style={{ color: 'green', display: statusMessage === 'Has Not Started Yet' ? 'block' : 'none' }}>Has Not Started Yet</p>
        <p style={{ color: 'blue', display: statusMessage === 'In Progress' ? 'block' : 'none' }}>In Progress</p>
      </div>
    </div>
  );
}

export default Popup;
