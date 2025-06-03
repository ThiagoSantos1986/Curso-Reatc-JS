interface Gnochis{
    id: number;
    title: string;
    price: string;
    img: string;
}

interface GnocchisCardsProps{
    listGnocchis: Gnochis[]
}



function CardGnocchi({ listGnocchis } : GnocchisCardsProps){
   

    return(

        <>
        {listGnocchis.map((gnochhi) => 
            
            <div key={gnochhi.id} className="grid-item">
            <img src={gnochhi.img} className="gnocchi-img" alt="Imagen Gnochi" />
            <h3 className="gnocchi-title">{gnochhi.title}</h3>
            <p className="gnocchi-price">{gnochhi.price}</p>
            </div>
        )}
        </>
    )
}

export default CardGnocchi;