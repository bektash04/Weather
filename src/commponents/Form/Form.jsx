
import './Form.css'
const Form = ({setWeather, city, setCity, }) => {
 
  const api_key = '9a076a90df603057583eee4e8ca6826b'
   const submithandlet = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => {
      
      setWeather(data)
    })
  }
  
   const CityInputHandler = (e) => {
    setCity(e.target.value)
   }
  
  return (
   <form onSubmit={submithandlet}>
    <div className='form-input'>
    <input className='input-todo' type="text" value={city} onChange={CityInputHandler} placeholder='city...' />
    <button className='btn-submit' type='submit'> <i class="fa-solid fa-magnifying-glass" style={{fontSize: '18px', color: '#fff'}}></i> <p className='git-form-hr'></p></button>
    </div>
   </form>
  )
}


export default Form



