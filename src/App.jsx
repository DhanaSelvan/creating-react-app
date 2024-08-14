// import logo from './logo.svg';
import './App.css';
import Header  from './components/Header'
import Footer  from './components/Footer'

function App() {

  const conStyle = {
    padding: '10px 20px',
    textAlign: 'justify'
  }

  const arr = [1, 2 , 3, 4 , 5]

  return (
    <>
      <Header />
      <main style={ conStyle }>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum nulla. Ratione, deleniti fugiat eius quas odio ea vitae eligendi, quod quia distinctio aperiam? Aut eos minima alias. Nisi, reiciendis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum nulla. Ratione, deleniti fugiat eius quas odio ea vitae eligendi, quod quia distinctio aperiam? Aut eos minima alias. Nisi, reiciendis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum nulla. Ratione, deleniti fugiat eius quas odio ea vitae eligendi, quod quia distinctio aperiam? Aut eos minima alias. Nisi, reiciendis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum nulla. Ratione, deleniti fugiat eius quas odio ea vitae eligendi, quod quia distinctio aperiam? Aut eos minima alias. Nisi, reiciendi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, eum nulla. Ratione, deleniti fugiat eius quas odio ea vitae eligendi, quod quia distinctio aperiam? Aut eos minima alias. Nisi, reiciendis?</p> */}
        <ul>
          {arr.map(item => {
            <li>{{item}}</li>
          })}
        </ul>
      </main>
      <Footer/>
    </>
  );
}

export default App;
