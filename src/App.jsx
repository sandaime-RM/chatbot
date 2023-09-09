import React, {useState, useEffect} from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';

function App() {
  const [chats, setChats] = useState({});
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState(defaultDataset);
  const [open, setOpen] = useState(false);
  const [answers, setAnswers] = useState([]);

  // setAnswers(dataset[currentId].answers, []);

  useEffect(() => {
    setAnswers(dataset[currentId].answers);
  
    setChats(prevState => [...prevState, {
      text : dataset[currentId].question,
      type : 'question'
    }])
  }, [currentId])

  return (
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={chats}/>
        <AnswersList answers={answers}/>
      </div>
    </section>
  );
}

export default App;
