import React, {} from 'react'
import './Weapons.css'
import Img1 from '../Assets/weapons/wep.png'
import WeaponCard from './WeaponCard'
import shef from '../Assets/weapons/sherif.png'
import classic from '../Assets/weapons/classic.png'
import shorty from '../Assets/weapons/short.png'
import frenzy from '../Assets/weapons/frenzy.png'
import ghost from '../Assets/weapons/ghost.png'
import stinger from '../Assets/weapons/stinger.png'
import spec from '../Assets/weapons/spec.png'




const Weapons = () => {


  return (
    <>
    <div className='wepMain'>
      <h1 className='sec1h'><b>Weapons</b></h1>
        <section  className='wepBG'>
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

        <sectiton className='wepCard'>
          <h1><b>CHOOSE <br/>YOUR WEAPONS</b></h1>
          <div className='sec2grid'>
            <WeaponCard title='Primary fire lands precise shots when still, and is equipped with an alternate burst-firing mode for close encounters.' h2=' SIDEARMS  ' p ='Lightweight and versatile, the default weapon for all is an instant classic.' name='classic' src={classic}/>
            <WeaponCard title='A nimble, short barrel shotgun that is deadly at close range but can only fire twice before needing to reload. Pairs well with long range weapons.' h2=' SIDEARMS' p ='Surprise your enemy up close for max effectiveness.' name='shorty' src={shorty}/>
            <WeaponCard title='Lightweight machine pistol that excels at firing on the move. Its high rate-of-fire can be difficult to control, so try short bursts at medium ranges.' h2=' SIDEARMS' p ='Up close, hold the trigger. From afar...try something else.' name='frenzy' src={frenzy}/>
            <WeaponCard title='The Ghost is accurate and carries a large magazine if you miss. Distant targets require a controlled fire rate. Quickly tap the trigger when you can see the whites of their eyes.' h2=' SIDEARMS' p ='Sleek, silenced, and proficient at any range.' name='ghost' src={ghost}/>
            <WeaponCard title='Its high-impact rounds pack a ton of recoil and require true grit to master. Wield the Sheriff right, and your enemies will know they were expendable.' h2=' SIDEARMS' p ='A modern six-shooter for the headshot searcher.' name='sheriff' src={shef}/>
            <WeaponCard title='This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility. The 20-round mag gets wasted in recoil-filled sprays, but lands lethal blows at medium distances with ADS and controlled fire.' h2=' SMGS' p ='They’ll know its over when the Stinger splash hits. ' name='stinger' src={stinger}/>
            <WeaponCard title='This SMG is more potent at medium to long range than its counterparts, but at the cost of firing rate and mobility.' h2=' SMGS' p ='They’ll know its over when the Stinger splash hits.' name='spectre' src={spec}/>
            <WeaponCard title='' h2=' SMGS' p ='' name='stinger' src={stinger}/>
          </div>
        </sectiton>
    </div>
    </>
  )
}

export default Weapons
