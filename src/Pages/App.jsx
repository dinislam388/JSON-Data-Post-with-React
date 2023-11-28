import { useEffect, useState } from 'react'
import Data from '../Components/Data'
import './App.css'
function App() {

  const [datas, setDatas] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(Data => setDatas(Data))
  }, [datas])
  
  return (
    <>
      <div>
        <h1 className='heading'>*Post Components*</h1>
        <div>
         <Data datas={datas}/>
        </div>
      </div>
    </>
  )
}

export default App
