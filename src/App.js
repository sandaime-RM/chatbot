import './App.css';
import React, {useState} from 'react';
import defaultDataset from './dataset';

function App() {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);

  return (
    <div>
      
    </div>
  );
}

export default App;
