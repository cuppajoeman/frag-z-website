import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import logo from '../public/appIcons/fragz-logo.png'
import { useCookies } from "react-cookie"
import { Card, VideoPlayer } from '@/components'
import { FaYoutube, FaPatreon, FaInstagram } from 'react-icons/fa'

interface CardProps {
  title: string,
  video: JSX.Element
  text: string,
}

const SkillDeathMatchInfo = () => (
  <div className="flex flex-col items-center justify-center">
    <h1 className="font-bold text-xl">Rewarded Skills</h1>
    <ul className="w-[95%] h-44 md:w-1/2 md:h-60 md:mt-0 mt-3 text-sm p-3 text-justify border-b-white/90  border-r-white/90  border-l-2 border-t-2 border-b-2 border-t-black border-l-black border-r-2 bg-[#BEBEBE] md:text-lg overflow-y-scroll no-scrollbar">
      <li className="">
        <span className="font-bold">Backstab </span>
        you sneak up on an enemy and then hit them with meele in the back
      </li>
      <li className="">
        <span className="font-bold">Air shot </span>
        projectile or sniper hits enemy while they&apos;re mid-air [above a certain height]</li>
      <li className="">
        <span className="font-bold">Meat shot </span>
        you hit a shotgun blast point blank on someone
      </li>
      <li className="">
        <span className="font-bold">Jump shot </span>
        you are scoped in on a sniper, jump above cover and hit a shot
      </li>
      <li className=""><span className="font-bold">Drop shot </span>
        you are scoped in on a sniper, fall off an object and hit a shot
      </li>
      <li className="">
        <span className="font-bold">360 shot </span>
        you whip around a 360 and scope in and hit someone
      </li>
      <li className="">
        <span className="font-bold">Skeet shot </span>
        knock someone up with a projectile and snipe them out of the air
      </li>
      <li className="">
        <span className="font-bold">Kill streak </span>
        gain more points by being on a higher killstreak
      </li>
      <li className="">
        <span className="font-bold">High speed </span>
        you frag someone while moving over a certain speed
      </li>
      <li className="">
        <span className="font-bold">Speed ticket </span>
        points earned are proportional to time spent over speed limit
      </li>
      <li className="">
        <span className="font-bold">Pinning </span>
        gun pinning you hold someone up in the air with the lightning gun
      </li>
      <li className="">
        <span className="font-bold">Mid air </span>
        kill both players are in the air and kill eachother
      </li>
      <li className="">
        <span className="font-bold">Delayed </span>
        fire a projectile and it kills someone after a few seconds of travel time
      </li>
      <li className="">
        <span className="font-bold">From the grave </span>
        you kill a player after you are dead
      </li>
      <li className="">
        <span className="font-bold">Untouchable </span>
        you kill someone while they don&apos;t get any damage on you
      </li>
      <li className="">
        <span className="font-bold">Team wipe </span>
        all enemies are currently dead due to you
      </li>
    </ul>
  </div>
)

const SupportInfo = () => (
  <div className="flex flex-col items-center justify-center w-full">
    <h1 className="font-bold">Follow Us</h1>
    <div className="flex flex-row w-full justify-evenly items-center my-5">
      <a href='https://patreon.com/user?u=89056897' target='/' className="text-4xl mx-auto">
        <FaPatreon />
      </a>
      <a href='https://www.youtube.com/channel/UC85fkO9QnMYru6a2ZKPPK3g' target='/' className="text-4xl mx-auto">
        <FaYoutube />
      </a>
      <a href='https://www.instagram.com/frag.z.game/' target='/' className="text-4xl mx-auto">
        <FaInstagram />
      </a>
    </div>
  </div>
)

const cardData = [
  {
    title: "The Art Of Hitting Clips",
    text: "you know those moments when you're flying around a map, in a flow state fragging everyone who comes in your path? It's the best. Games that give the player this freedom are dying out, nowadays most games have bullshit abilities, slow movement and footage that the average person can't appreciate. For the ones that are still around, servers are far and few between, are no longer under active development or have bots/cheaters. We're going to bring back the OG gameplay with frag-z.",
    video: <VideoPlayer link='https://d21vt9tthjew1s.cloudfront.net/clip0.mp4' />,
  },
  {
    title: "Principles",
    text: "at its core, frag-z is a multiplayer shooter with a focus on movement and fluidity. graphics will be minimal/low poly with performance in mind supporting windows, linux and mac. players can go mad with classic techniques with quake style strafing, c-jumps, and edge bugs. there will be a handful of classic weapons for players to use, each one targeting an aim style. The gist is to reward the kind of gameplay you&apos;d see in a 90&apos;s frag movie.",
    video: <VideoPlayer link='https://d21vt9tthjew1s.cloudfront.net/clip1.mp4' />,
  },
  {
    title: "Skill Death Match",
    text: "the main gamemode is a classic death match where players roam around with infinte ammo and any weapon. when players hit high skilled shots, they do more damage forcing you to go for intense plays or die. Games will last 10 mins and of course, most frags win.",
    video: <SkillDeathMatchInfo />,
  },
  {
    title: "Support Us",
    text: "right now everyone working on frag-z is doing it for the fun of the game, supporting us will cover costs associated with the game and eventually be able to hire on our contributors full-time.",
    video: <SupportInfo />,
  },

]

export default function Home() {
  const [toggle, setToggle] = React.useState(false);
  const [cookies, setCookies] = useCookies();

  // Used for splash page
  // On the first load add cookies
  // cookies last 10min
  React.useEffect(() => {
    if (!cookies.toggle) {
      setCookies(
        'toggle',
        'true',
        {
          maxAge: 60 * 10
        }
      )
      setToggle(true)
      // 

    }
  }, [])


  return (
    <>
      <Head>
        <title>Frag-Z &#8226; Home </title>
        <meta name="description" content="Frag-Z Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full min-h-fit overflow-y-scroll no-scrollbar flex flex-col items-start justify-center">
        {
          (toggle) ?
            // Splash screen
            <div className="w-full flex flex-col items-center">
              {/* logo */}
              <div className="">
                <Image src={logo} alt='logo' />
              </div>
              <h1 onClick={(e) => { setToggle(false) }} className="font-arash text-white text-6xl hover:scale-110 tracking-wide cursor-pointer">ENTER</h1>
            </div>
            :
            // Page Content
            <div className="flex flex-col h-full w-full text-white relative">
              {/* Main video thing */}
              <div className="h-96 md:h-[450px] mb-5">
                <span className="w-fit h-fit absolute top-0 z-10">
                  <Image className='h-10 w-24' src={logo} alt='logo' />
                </span>
                {/* Video */}
                <div className="flex flex-col items-center justify-center w-full h-full z-0">
                  <video loop autoPlay playsInline muted className='h-full w-full object-cover' src="https://d21vt9tthjew1s.cloudfront.net/fragzGP0.mp4" poster='images/thumbnails/fragzGP0Thumbnail.jpg' />
                </div>
              </div>

              {/* Card group */}
              <div className="w-full h-fit flex flex-col items-center ">
                {
                  cardData.map((data: CardProps, i) => (
                    <Card key={i} title={data.title} video={data.video} text={data.text} />
                  ))
                }

              </div>
            </div>
        }
      </main>
    </>
  )
}
