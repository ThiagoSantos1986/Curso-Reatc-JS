import "./menu.css";

function Menu() {
  return (
    <header>
      <nav>
        <h2 id="logo">Mamamia Massas</h2>
        <div id="links">
          <a className="link-menu" href="#home">
            Home
          </a>

          <a className="link-menu" href="#gnocchi">
            Gnocchi
          </a>

          <a className="link-menu" href="#pastas">
            Pastas
          </a>

          <a className="link-menu" href="#bebidas">
            Bebidas
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
