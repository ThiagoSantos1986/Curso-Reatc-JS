

function CardGnocchi(props){
   

    return(

        <>
        {props.listGnocchi.map((gnochhi) => 
            
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