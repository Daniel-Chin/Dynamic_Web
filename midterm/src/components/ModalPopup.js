import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ModalPopup = ({ popup_state, setPopup_state }) => {
  const myPopupStyles = {
    content: {
      top: '50%', 
      left: '50%', 
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 'none', 
      width: '80%', 
      borderRadius: '20px', 
    }, 
  };

  return (
    <Modal 
      isOpen={popup_state < 2} 
      onRequestClose={() => {setPopup_state(popup_state + 1);}} 
      style={myPopupStyles} 
      contentLabel='PopupNotice'
    >
      <div className="modalTitleBar" style={popup_state ? {
        backgroundColor: '#900', 
        color: 'white', 
      } : {
        borderBottom: 'solid 2px #ccc', 
      }}
      >
        {popup_state ? 'Notice' : 'Welcome'}
      </div>
      <div className="modalBody">
        {popup_state === 0 ? 
          <>
            <p>
              This app uses the unofficial API of {' '}
              <a href='https://urbandictionary.com'>
                Urban Dictionary
              </a> 
              {' '} provided by {' '}
              <a href='https://rapidapi.com'>RapidApi</a>. 
            </p>
            <p>
              This app also uses {' '}
              <a href='http://www.voicerss.org/api/demo.aspx'>
                Voice RSS TextToSpeech
              </a> 
              {' '} API.  
            </p>
          </>
        :
          <>
            <p>
              We do not filter content from Urban Dictionary. 
            </p>
            <p>
              Rude texts may show up in your search results. 
            </p>
          </>
        }
        <div className="buttonDiv">
          <button 
            className='modalButton funnyFont' 
            autoFocus 
            onClick={() => {
              setPopup_state(popup_state + 1);
            }}
          >
            ok
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalPopup;
