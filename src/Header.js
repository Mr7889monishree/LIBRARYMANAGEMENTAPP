import React from 'react'


const Header = ({title}) => {
  return (
    <main className='App-header'>
        <header>{title}</header>
        
    </main>
  )
}

Header.defaultProps={
    title:'Library App'
}
export default Header