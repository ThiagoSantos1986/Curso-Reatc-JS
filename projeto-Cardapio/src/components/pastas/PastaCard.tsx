import Molhos from "../molhos/Molhos";

interface Pasta{
    id: number;
    title: string;
    price: string;
    img: string;
    molhos: string[]
}

interface PastaCardsProps{
    listPastas : Pasta[]
}



function PastaCard({ listPastas }: PastaCardsProps) {
    return (
        <>
            {listPastas.map((pasta, idx) => (
                <div key={idx} className="pasta-card">
                    <h3 className="pasta-title">{pasta.title}</h3>
                    <img className="pasta-img" src={pasta.img} alt={pasta.title} />
                    <Molhos molhos={pasta.molhos} />
                    <p className="pasta-price" >{pasta.price}</p>
                </div>
            ))}
        </>
    );
}

export default PastaCard;