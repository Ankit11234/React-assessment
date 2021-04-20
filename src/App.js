import './App.css';
import { useState, useEffect } from 'react';
import Card from './Card.js'

function App() {
  const [data, setData] = useState([]);
  const [final, setFinal] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState("");
  const url = 'https://www.hatchways.io/api/assessment/students'

  const getdata = async () => {
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        let temp = data.students
        temp.map(i => i.tags = [])
        console.log(temp)
        setData(temp)
      })
  }

  const tagSearch = () => {
    const result = data.filter(i => i.tags.some(it =>
      (it.toUpperCase() === tag.toUpperCase())))
    setFinal(result);
  }

  useEffect(() => {
    tagSearch();
  }, [tag])

  useEffect(() => {
    getdata();
  }, [])
  useEffect(() => {
    const searched = data.filter((it) => (it.firstName.toUpperCase().includes(search.toUpperCase()))
      || (it.lastName.toUpperCase().includes(search.toUpperCase()))

    )
    setFinal(searched);
  }, [search])

  return (
    <div className="App">
      <input value={search}
        onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" />
      <input value={tag}
        onChange={(e) => setTag(e.target.value)} placeholder="Search by tag" />
      {
        search.length === 0 && tag.length === 0 ?
          data.map(i => (
            <Card i={i} key={i.id} />
          ))
          : final.map(i => (
            <Card i={i} key={i.id} />
          ))
      }
    </div>
  );
}

export default App;
