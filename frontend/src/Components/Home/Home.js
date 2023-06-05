import React from 'react'
import './Home.css'
import mainVid from '../Assets/vids/homePage.mp4'
import valGameplay from '../Assets/vids/VALORANT_gplay.mp4'
import valorant from '../Assets/logos/val-png.png'

const Home = () => {
  return (
    <>
     <div className='HomeMain'>
        <div className='homeDiv2'>
          <video autoPlay loop muted playsInline className='mainVid'>
            <source src={mainVid}/>
          </video>

          <div className='homeDiv2Con'>
            <p>A 5v5 character-based tactical shooter</p>
            <img alt='' src={valorant}/>
            <button className="valBtn" > PLAY FREE</button>
          </div>
        </div>

        <div className='valMainDiv'>
          <div className='valoBan '>
            <div className='valBanInputs'>
             <p>EPISODE_06 // ACT II / YR 3</p>
             <h1>REVELATION</h1>
             <div className='valBanBtn'>
                <button>play for free</button>
                <button>watch trailer</button>
             </div>
            </div>
          </div>
         
          <div className='valoBan2'>
            <h1 className='valBanH1'><b>WE ARE VALORANT</b></h1>
           <div className='valoBan2Div1'>
              <div className='gplay'>
                <h1>Game play</h1>
                <p>Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.<br/>
                Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
              </div>
              <video autoPlay loop muted playsInline className='gplay1'>
                <source src={valGameplay}/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
