
import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

    


    

 function App(){
 const [chatMessages, setChatMessages] = useState([{
    
        message:'hello chatbot',
        sender: 'user',
        id: 'id1'
      }, {
        message:'Hello! How can I help you?',
        sender: 'robot',
        id: 'id2'
      }, {
        message:'Hi Motherfucker',
        sender: 'user',
        id: 'id3'
      }, {
        message:'Hello! How can I help you?',
        sender: 'robot',
        id: 'id4'
      }]);
      return(
        <div className="app-container">
       
        <ChatMessages
        chatMessages={chatMessages}
        />
         <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
        </div>
      );

     }

export default App
