import Header from "../../Components/Header";
import Title from "../../Components/Title";
import triangle from '../../Assets/images/shapeHome.svg'
import play from '../../Assets/images/playHome.svg'
import classes from './home.module.css'
import {useState,useEffect} from 'react'

function Home() {

  const [count,setCount] = useState(0)

  useEffect(() => {

    document.title = `yeah bitch count ${count}`


  })

  return (


      <div className={`vh-100 `} style={{backgroundColor:"black"}}>
        <Header/>



        <div className={`container h-75 d-flex align-items-center border-2 border-danger rounded my-5`}>

          <h1 className={`text-white w-75 ${classes.title}`}>
            <div className={`row`}>
              <div className={`col-xl-3`}> <Title back="We Are" front="We Are"/> </div>
              <div className={`col-xl-2 text-center`}> <img src={triangle}/></div>
              <div className={`col-xl-3`}><Title back="People" front="People"/> </div>
            </div>
            <div className={`row`}>
              <div className={`col-xl-5`}> <Title back="Who Create" front="Who Create"/> </div>
              <div className={`col-xl-2 text-center`}> <img src={play} className={`ms-2`}/></div>
              <div className={`col-xl-4`}><Title back="Your" front="Your"/> </div>
            </div>
            <Title front="Project" back="Project"/>
          </h1>
          <button onClick={() => setCount(count+1)}>Fuck Push me</button>

          <h1 className={`text-white`}>{count}</h1>

        </div>



      </div>



  );
}

export default Home;
