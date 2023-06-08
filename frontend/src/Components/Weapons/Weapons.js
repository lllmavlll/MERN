import React, {} from 'react'
import './Weapons.css'
import Img1 from '../Assets/weapons/wep.png'
import WeaponCard from './WeaponCard'
import shef from '../Assets/weapons/sherif.png'



const Weapons = () => {


  return (
    <>
    <div className='wepMain'>
      <h1 className='sec1h'><b>Weapons</b></h1>
        <section style={{minHeight:'85vh'}} className='wepBG'>
          <div className='wepG1'>
            <p>In Valorant, there are a plethora of weapons to learn and keep track of. Here’s a breakdown of all 17 weapons in Valorant — from when to use them and what their strengths and weaknesses are.</p>
            <p>Agents have different variations of weapons, typically firearms, to cater to specific playstyles or metas. Weapons are separated by two categories, Sidearms and Primary weapons. Sidearms consists of pistols, whilst primaries include SMGs, shotguns, rifles, sniper rifles, and machine guns.</p>
            <p>Guns have limited amounts of ammo but come with reserve magazines. Bullets deal different amounts of damage depending on the gun, the body part they hit, and the distance between the shooter and the target. Each gun deals a set amount of damage to an enemy's body at its shortest range and then uses multipliers on this value to calculate the damage it will deal to the head and legs at close range and all body parts at further ranges. Resulting numbers with a decimal value are rounded down to the next integer value. Enemies hit by bullets will also be tagged with a 72.5% slow for a brief period. Shotgun pellets will only apply a 30% slow if they tag an enemy beyond 10 meters.</p>
            <p>Weapons can be purchased by Agents using creds during the pre-round sequence. Each Agent is equipped with a Knife and the Classic sidearm for free by default. Agents will keep the weapons they purchase through each round until they die. Weapons can also be picked up off the ground from deceased players, both friendly and hostile, which will carry on with the player into the next round.</p>
          </div>
          <div className='wepG2'>
            <img src={Img1} alt=''/>
          </div>
        </section>

        <sectiton className='wepBG2'>
          <div className='sec2grid'>
            <WeaponCard src={shef}/>
            <WeaponCard src={shef}/>
            <WeaponCard src={shef}/>
            <WeaponCard src={shef}/>
          </div>

        </sectiton>
    </div>
    </>
  )
}

export default Weapons
