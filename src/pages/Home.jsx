import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Home(props) {
  const {data , darkmode} = props;
  const [search , setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter(item =>
      item.name.common.toLowerCase().includes(search.toLowerCase()) ||
      (item.translations.kor.common &&
        item.translations.kor.common
          .toLowerCase()
          .includes(search.toLowerCase()))
    );
    setFilteredData(filtered);
  }

  useEffect(()=> {
    setFilteredData(data);
  },[data])

  return (
    <div className={!darkmode ? 'darkmode' : 'lightmode'}>
      <div className='container'>
        <input
          type="text"
          value={search} 
          placeholder='Search'
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          style={{
            backgroundColor: !darkmode ? '#222' : '#eee',
            color : !darkmode ? '#eee' : '#222'
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: !darkmode ? '#222' : '#eee',
            color : !darkmode ? '#eee' : '#222'
          }}
          >Search</button>
        <div className='home'>
          {
            data && filteredData.map((items, i) => {
              return (
                <div key={i}className='items'>
                  <Link
                    className='picture'
                    to={`/detail/${data.indexOf(items)}`}>
                      <img src={items.flags.png} />
                  </Link>
                  <h3>{items.name.common} {items.translations.kor.common}</h3>

                  <p><span>Population : </span>{items.population}</p>
                  <p><span>Region : </span>{items.region}</p>
                  <p><span>Capital : </span>{items.capital}</p>
                  {/* <Link to={`detail/${i}`} >자세히 보기</Link> */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home