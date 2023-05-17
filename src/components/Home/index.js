import React,{useState} from 'react'
import bg from "../../assets/bg.png"
import {BiRupee} from "react-icons/bi"
import {FaCheck} from "react-icons/fa"
import {BsCircle} from "react-icons/bs"
import book from "../../assets/book.png"
import clock from "../../assets/clock.png"
import live from "../../assets/live.png"
import scholar from "../../assets/scholar.png"
import ads from "../../assets/ads.png"
import warnClock from "../../assets/warningclock.png"
import razorpay from "../../assets/Razorpay.png"
import "./index.css"

const points=[
  {id:1,
   img : book,
   text:<p className='points-text'><span style={{marginRight:"6px"}} className='special-points-text'>100+ </span>Job relevant Course</p>
  },
  {id:2,
    img : clock,
    text:<p className='points-text'><span style={{marginRight:"6px"}} className='special-points-text'>20000+ </span>Hours of content</p>
   },
   {id:3,
    img : live,
    text:<p className='points-text'><span style={{marginRight:"6px"}} className='special-points-text'>Exclusive </span>webinar access</p>
   },
   {id:4,
    img : scholar,
    text:<p className='points-text'>Scholarship worth <span style={{marginLeft:"4px"}} className='special-points-text'><BiRupee />94,500</span></p>
   },
   {id:5,
    img : ads,
    text:<p className='points-text'>Ad Free <span style={{marginLeft:"6px"}} className='special-points-text'>learning experience</span></p>
   },
]

const subcriptionsList=[
  {id:1,
    text:"12 Months Subscription",
    tp:179,
    mp:15,
    offer:
    <span className='offers' style={{background:"#47BA68"}}>Recommended</span>

  },
  {id:2,
    text:"6 Months Subscription",
    tp:149,
    mp:25,
  },
  {id:3,
    text:"3 Months Subscription",
    tp:99,
    mp:33,
  },
]




function Home() {
  const [radio,setRadio]=useState(subcriptionsList[0].id)
  const [price,setPrice]=useState(subcriptionsList[0].tp)

  const onClickli=(id,tp)=>{
    setRadio(id)
    setPrice(tp)
  }
 


  return (
    <main className='home-bg' style={{backgroundImage:`url(${bg})`}}>
      <section className='home-container'>
       <div>
        <div>
          <h1 className='heading'>Access curated courses worth </h1>
          <div className='heading-two-container'>
            <h1 className='discount'><BiRupee className='rupee-icon'/><span className='discount' >18,500</span></h1>
            <h1 className='heading-two'>at just</h1>
            <h1 className='special-price'><BiRupee className='rupee-icon'/>99 </h1>
            <h1 className='heading-two'>per year!</h1>
          </div>
        </div>
          <ul className='points-container'>
            {points.map(({id,img,text})=>(
              <li className="points-item" key={id}>
                <img className='points-img' src={img} alt={img}/>
                {text}
              </li>
            ))}
          </ul>
          </div> 

   {/*-------------------------- Subscription-Box------------------ */ }

       <form className='subscription-box' >
        <div className='progress-bar'>
          <div className='progress-container'>
            <div className='icon-container'>
              <p>1</p>
            </div>
             <p className='progress-text'>Sign Up</p>
          </div>
          <div className='progress-container'>
            <div className='icon-container'>
              <p >2</p>
            </div>
            <p className='progress-text'>Subscribe</p>
          </div>

        </div>
        <h1 className='form-header'>Select your subscription plan</h1>

  {/*---------------- Subcription-Plan---------------------- */ }

        <ul className='subscription-list' >
          <li className='expire-item'>
           <div className='input-container'>
             <input  htmlFor="expire" className="radio-expire" type="radio" defaultChecked style={{height:"23px",width:"25px" }} name="radio"  />
             <label id="expire" className='expire-label'>12 Months Subscription</label>
            </div>
              <span className='offers' style={{marginRight:"10px"}}>Offer Expired</span>
            <div className='subscription-price-container'>
              <p className='subscription-total-price'> Total<span className='price-rupee' style={{fontSize:"16px"}}> <BiRupee style={{margin:"0px",fontWeight:"bold"}} />99</span> </p>
              <p className="subscription-price"> <span className='price-rupee' style={{marginRight:"5px"}}  ><BiRupee/>8</span> /mo</p>
            </div>
          </li>

      {/*------------Selection and Updation--------------- */ }

          {subcriptionsList.map(({id,text,tp,mp,offer})=>{
            const onClicklis=()=>{
              onClickli(id,tp)
            }

            const activeBg=radio===id?"#D7EDDD":""
            const activeBorder=radio===id?"2px solid #47BA68":"2px solid #bebebe"
          
          return(
            <li className='subcription-item' style={{backgroundColor:activeBg,border:activeBorder}} key={id} onClick={onClicklis}>
              <div className='input-container'>
                {radio===id ?<div className='check-icon-container'> 
                <FaCheck className='check-icon'/>
                </div>:<BsCircle className='circle-icon'/>}
                <label  className='expire-label' style={{color:"#3c4852",fontWeight:600}}>{text}</label>
              </div>
             {offer}
              <div className='subscription-price-container'>
                <p className='subscription-total-price' style={{color:"#3C4852",fontWeight:100}}> Total<span className='price-rupee' style={{fontSize:"16px",fontWeight:"bold",color:"#3C4852"}}> <BiRupee style={{margin:"0px",fontWeight:"bold"}} />{tp}</span> </p>
                <p className="subscription-price"> <span className='price-rupee' style={{marginRight:"5px",color:"#3C4852",fontWeight:500}}  ><BiRupee/>{mp}</span> /mo</p>
              </div>
           </li>
          )})}
        </ul>

   {/*--------------------- Summary-Container-------------- */ } 

        <div className='summary-container'>
          <div className='summary-first'>
            <p className='summary-text'>Subscription Fee</p>
            <p className='summary-price' style={{fontSize:"15px",fontWeight:600,color:"#3C4852"}}> <BiRupee style={{margin:"0px",fontWeight:"bold"}} />18,500</p>
          </div>
          <div className='limited-time-container'>
            <div style={{width:"83%"}}>
              <p className='summary-text' style={{color:"#DE4313",fontWeight:600,marginBottom:"9px"}}>Limited time</p>
            <div className='warning-click-container'>
              <img src={warnClock} alt="warn-clock"  className='warn-clock'/>
              <span className='warn-clock-text'>Offer valid till 25th March 2023</span>
            </div>
            </div>
            <p className='limited-price' style={{fontSize:"15px",fontWeight:600,color:"#3C4852"}}>-<BiRupee style={{margin:"0px",fontWeight:"bold"}} />18,{500-price}</p>
          </div>

          <div className='summary-total-container'>
            <p className='summary-total-text'> <span style={{fontWeight:600}}>Total</span> (Incl. of 18% GST)</p>
            <p className='summary-total-price'><BiRupee/>{price}</p>
          </div>
        </div> 

    {/*-----------------------------Button-Container------------------ */ }
        <div className='btn-container'>
          <button className='cancel-btn' disabled >
            CANCEL
          </button>
          <button className='pay-btn' disabled >
            PROCEED TO PAY
          </button>
          </div>  
        <img src={razorpay} alt="razorpay" className='razorpay'/>  
        </form>     
      </section>
    </main>
  )
}

export default Home