import './App.css';
import { useState } from 'react';


function App() {

  const [inputTitle, setInputTitle] = useState('')
  const [inputIndex, setInputIndex] = useState('')
  const [todoList, setTodoList] = useState([])
  const [completedList, setCompletedList] = useState([]);
  const [id, setId] = useState(1);

  const addItem = () => {
    const newItem = {
      title: inputTitle,
      index: inputIndex,
      id: id
    };
    console.log(newItem)
    setId(id + 1);
    setTodoList([...todoList, newItem]);

    // Clear input fields
    setInputTitle('');
    setInputIndex('');
  };
  // const Delete = () => { console.log('연결') }

  // memo 부분 기능
  const onDelete = (selectedId) => {
    console.log(selectedId)
    const updatedTodoList = todoList.filter(newItem => newItem.id !== selectedId);
    setTodoList(updatedTodoList);
  };

  const onComplete = (selectedId) => {
    const selectedTask = todoList.find(newItem => newItem.id === selectedId)
    setCompletedList([...completedList, selectedTask]);
    const updatedTodoList = todoList.filter(newItem => newItem.id !== selectedId);
    setTodoList(updatedTodoList);
  };

  // DoneMemo 부분 기능
  const doneDelete = (selectedId) => {
    console.log(selectedId)
    const updatedTodoList = completedList.filter(newItem => newItem.id !== selectedId);
    setCompletedList(updatedTodoList);
  };

  const doneComplete = (selectedId) => {
    const selectedTask = completedList.find(newItem => newItem.id === selectedId)
    setTodoList([...todoList, selectedTask]);
    const updatedTodoList = completedList.filter(newItem => newItem.id !== selectedId);
    setCompletedList(updatedTodoList);
  };

  return (
    <div className="App">
      <div className='contents'>
        <div className='bar'>
          <div className='barSet'>
            <h1>My Todo List</h1>
            <h2>React</h2>
          </div>
        </div>
        <div className='topBar'>
          <div className='input'>
            <div className='title'>
              <span>제목 </span>
              <input value={inputTitle} type='text' className='inputTitle' onChange={(event) => setInputTitle(event.target.value)} />
            </div>
            <div className='index'>
              <span>내용 </span>
              <input value={inputIndex} type='text' className='inputIndex' onChange={(event) => setInputIndex(event.target.value)} />
            </div>
          </div>
          <button onClick={addItem} className='firstbtn'>추가하기</button>
        </div>
        <div className='indexSection'>
          <div className='sectionTitle'>Working 🔥</div>
          <div className='memo'>
            {todoList.map((item, index) => (
              <div className='working' key={index}>
                <div className='workingHouse'>
                  <div className='workingRoom'>
                    <div className='workTitle'>{item.title}</div>
                    <div className='workIndex'>{item.index}</div>
                  </div>
                  <div className='buttons'>
                    <button type='button' onClick={() => onDelete(item.id)} className='delete'>삭제하기</button>
                    <button onClick={() => onComplete(item.id)} className='good'>완료</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='sectionTitle'>Done ✅</div>
          <div className='DoneMemo'>
            {completedList.map((item) => (
              <div className='working'>
                <div className='workingHouse' key={item.id}>
                  <div className='workingRoom'>
                    <div className='workTitle'>{item.title}</div>
                    <div className='workIndex'>{item.index}</div>
                  </div>
                  <div className='buttons'>
                    <button type='button' onClick={() => doneDelete(item.id)} className='delete'>삭제하기</button>
                    <button onClick={() => doneComplete(item.id)} className='cancel'>취소</button>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
