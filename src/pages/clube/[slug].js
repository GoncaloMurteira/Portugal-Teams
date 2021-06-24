

export default function Clube({clube}) {

        console.log(clube)
        
        return(
        <>
             <div className="header">
                Portugal Teams
            </div>

            <div class="container">

            <div class="containerTeam">
                <div class="block1"><img height="190" className="imgTeam" src={clube.strTeamBadge} /></div>
                <div class="block2"><h1 className="teamName">{clube.strTeam}</h1></div>
                <div class="block3">
                <h3>Foundation Year: {clube.intFormedYear}</h3>
                <h3>Stadium: {clube.strStadium}</h3>
                    </div>
            </div>
            
            <div className="teamDescription">
                <h1>Team Description</h1>
                <p>{clube.strDescriptionEN}</p>
            </div>

            <div className="StadiumDescription">
                <h1>Stadium Description</h1>      
                <p>{clube.strStadiumDescription}</p>
            </div>

        </div>
        </>

    )

}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({params}){
    const code = params.slug;
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${code}`);

    const clube  = await res.json();

    return {
        props: {
            clube:clube.teams[0]
        },
        revalidate: 10
    }
} 