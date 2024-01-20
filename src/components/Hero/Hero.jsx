import React from 'react'
import { useState } from 'react';
import logo from '../../assets/Logos/QuizzaHutLogo.svg'
const Hero = () => {

    const [bigShowImg, setbigShowImg] = useState("bigShoe1");
    
    

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container px-20">

        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">

          <p className="text-xl font-montserrat text-coral-red" >Our Ultimate Quiz Series</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold z-1 max-lg:z-0 leading-3 " > 
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 rounded-full text-6xl "> To Enhance <br /> Knowledge </span> 
           <br />
          <span className="text-coral-red text-7xl inline-block mt-3 pr-3 text-slate-600"> Have QuizzaHut</span>
          
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm " >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium, id quidem ipsum unde omnis obcaecati. Repellendus tenetur cumque pariatur distinctio nostrum! Nihil ipsam ipsum eius doloribus architecto, repellat nemo!
          </p>

          {/* <Button label="Show now" iconURL={arrowRight} /> */}

          
          
        </div>
      
      <div className=" bg-slate-300 relative flex-1 flex justify-center items-center max-xl:py-20 bg-primary bg-hero bg-center bg-cover">
          <img src={logo} alt="Nike Shoe" 
          width={610}
          height={500} 
          className="object-contain relative z-10 "
          />

          <div className="flex gap-4 sm:gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {/* {shoes.map((shoe)=>(
              <div key={shoe}>
            
              <ShoeCard 
              imgURL ={shoe}
              changeMainShoeImage={(shoe)=>setbigShowImg(shoe)}
              bigShowIMG = {bigShowImg}
              className=""
              />
             
              </div>
            ))} */}

            <img src={logo} alt="" />



          </div>

      </div>

    </section>

  )
}

export default Hero