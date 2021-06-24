import Link from 'next/link'


export default function Home({ clubes }) {


  return (
    <>
      <div className="header">
          Portugal Teams
      </div>
      
      <div class="container">

      { 

        clubes && clubes.teams.map(clube => {
        return(   
             
          <Link key={clube.idTeam} href={`clube/${clube.idTeam}`}>
            
          <a>
            <div class="card">
              <div class="card-img">
                <img height="48" src={clube.strTeamBadge} />
              </div>
              <div class="card-titulo">
                {clube.strTeam}
              </div>
              <div class="card-info">
                {clube.strLeague}
              </div>
              <div class="card-info">
              {clube.intFormedYear}
              </div>
            </div>  
          </a>

          
            

          </Link>

        )
        })
      } 

      </div>
    </>
    
    
  )
}




export async function getStaticProps() {
  const res = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Portugal');
  const clubes = await res.json();

  return {
    props: {
      clubes
    },
    revalidate: 10
  }
}