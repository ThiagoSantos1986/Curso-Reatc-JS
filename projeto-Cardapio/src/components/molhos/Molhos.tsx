import "./molhos.css"

interface MolhosProps{
    molhos: string[]
}


function Molhos({ molhos } : MolhosProps  ){

    return(
        <div className="container-molho">
            <h2>Molhos</h2>
            
            <ul className="lista-molhos">
                {molhos.map((item, idx) => 
                    <li key={idx}>
                        {item}</li>
            )}
            </ul>
        </div>

    )
}

export default Molhos;