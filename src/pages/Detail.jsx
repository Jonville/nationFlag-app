import React from 'react'
import { Link , useParams } from 'react-router-dom'

function Detail(props) {
  const {data , darkmode} = props
  const params = useParams();
  const items = data[params.id];

  return (
    <div className={!darkmode ? 'darkmode' : 'lightmode'}>
      <Link to='/' >
        <button className='detailBtn'
            style={{
            backgroundColor: !darkmode ? '#222' : '#eee',
            color : !darkmode ? '#eee' : '#222'
          }}>back
        </button>
      </Link>
      <div className='detail'>
        <div className='detail-nation'>
          <p style={{fontSize:'1.5rem' , fontWeight:'bold'}}>{data && items?.cca2}</p>
          <img src={items?.flags.png} />
        </div>
        <div className='detail-content'>
          <p style={{fontSize:'1.2rem' , fontWeight:'bold'}}>{data && data[params.id]?.name?.common} {data[params.id]?.translations?.kor?.common}</p>
          <p><span>Population : </span>{data && items?.population}</p>
          <p><span>Region : </span>{data && items?.region}</p>
          <p><span>Capital : </span>{data && items?.capital}</p>
          <p><span>Sub Region : </span>{data && items?.subregion}</p>
          <p><span>Top Level Domain : </span>{data && items?.cca2}</p>
          <p><span>Languages : </span>{items &&
              Object.values(items.languages).map((language) => (
                <span style={{fontWeight:'normal'}} key={language}>{language} </span>
              ))}</p>
        </div>
      </div>
    </div>
  )
}

export default Detail