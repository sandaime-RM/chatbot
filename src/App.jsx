import React, {useState} from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Answer } from './components/index';

function App() {
  const [chats, setChats] = useState({});
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState(defaultDataset[currentId].answers);

  // setAnswers(dataset[currentId].answers, []);

  return (
    <section className='c-section'>
      <div className='c-box'>
        <AnswersList answers={answers}/>
      </div>
    </section>
  );
}

export default App;
