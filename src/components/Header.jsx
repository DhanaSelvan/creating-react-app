import './Header.css'

const Header = () => {
    return (
      <>
        {/* <header style={{ backgroundColor: 'red', color: 'whitesmoke', padding: '10px 20px' }}>
          <h1>My First React App</h1>
        </header> */}
        <header>
          <div className='title'>
            <h1>THE NAVEEN</h1>
          </div>
          <div>
            <ul className='list'>
              <li>India</li>
              <li>World</li>
              <li>Movies</li>
              <li>Technology</li>
              <li>e-Paper</li>
            </ul>
          </div>
        </header>
      </>
    )
}

export default Header;