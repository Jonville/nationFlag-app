import React from 'react'

function Header(props) {
  const {darkmode , handleDarkmode} = props

  return (
    <div className={!darkmode ? 'darkmode' : 'lightmode'}>
      <div className='header'>
        <p className='hTitle'>Where in the world?</p>
        <button
          onClick={handleDarkmode}
          style={{
            backgroundColor: !darkmode ? '#222' : '#eee',
            color : !darkmode ? '#eee' : '#222'
          }}
        >
          {
            darkmode ? 'Dark Mode' : 'Light Mode'
          }
        </button>
      </div>
    </div>
  )
}

export default Header