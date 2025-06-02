import './bebidas.css'

function Bebidas() {
    return (
        <section id="bebidas" className="bebidas-section">
            <h1 id='title-bebidas'>Bebidas</h1>
            <ul className="list-group">
                <li className="list-item">
                    AGUA:
                    <span className="item-price">Preço: <strong>R$ 6,00</strong></span>
                </li>
                <hr />
            </ul>
            <ul className="list-group">

                <li className="list-item">
                    REFRIGERANTE:
                    <ul>
                        <br />
                        <li className="list-item">
                            GUARANA:
                            <span className="item-price">Preço: <strong>R$ 6,00</strong></span>
                        </li>
                        <hr />
                        <li className="list-item">
                            SPRITE:
                            <span className="item-price">Preço: <strong>R$ 6,00</strong></span>
                        </li>
                        <hr />
                        <li className="list-item">
                            COCA-COLA:
                            <span className="item-price">Preço: <strong>R$ 6,00</strong></span>
                            
                        </li>
                        <hr />
                    </ul>

                </li>
                
            </ul>
            <ul className="list-group">

                <li className="list-item">
                    SUCOS:
                    <ul>
                        <br />
                        <li className="list-item">
                            MORANDO:
                            <span className="item-price">Preço: <strong>R$ 6,00</strong></span>
                        </li>
                        <hr />
                        <li className="list-item">
                            LARANJA:
                            <span className="item-price">Preço: <strong>R$ 6,00</strong></span>
                        </li>
                        <hr />
                        <li className="list-item">
                            UVA:
                            <span className="item-price">Preço: <strong>R$ 6,00</strong></span>
                        </li>
                        <hr />
                    </ul>

                </li>
               
            </ul>

               
        </section>
    )
}

export default Bebidas;