import React from 'react'
import TeamsCard from './TeamsCard'
import Footer from './Footer'

export default function Teams() {
  return (
    <>
    <div className='row'>
      <TeamsCard teamName="Web Development" teamHead="James Arthur" content="The web development team can be thought of as an IT crew that takes care of the code for one or multiple websites and apps. Naturally, they collaborate with other experts and teams. It's also possible that one person fulfills multiple roles." link="/webdev"/>
      <TeamsCard teamName="Dance & Song" teamHead="Jasmine Flakes" content="A dance squad or dance team, sometimes called a pom squad or song team, is a team that participates in competitive dance. A dance squad can also include: a jazz squad, ballet squad, or any kind of religion dance squad. Dance squads are a type of performance dance." link="/d&s"/>
      <TeamsCard teamName="Video & Audio" teamHead="Connor Collum" content="A balanced and comprehensive video team is one that will be able to craft a compelling video, one that fulfills its objective, whether that's to build brand awareness, teach employees important concepts, deliver product information, or any other role." link="/v&a"/>
      </div>
      <div className="row">
      <TeamsCard teamName="Photography" teamHead="Steve Winks" content="A Photographer's role involves taking photographs, processing images, and ensuring they meet the desired results. They also utilize editing techniques, maintain and operate photography equipment, and adhere to specifications for lighting, composition, and background." link="/phgpy"/>
      <TeamsCard teamName="Design" teamHead="Lily BloomFlower" content="The design team can be made up of one designer or a group of designers who play different roles, using different tools and methods to achieve one common goal. The common goal can be building a website, designing a mobile application, or any other design project." link="/design"/>
      </div>
      <Footer/>
    </>
    
  )
}
