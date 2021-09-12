import React from 'react'

const Nav = () => {
  return ( 
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark text-light navbar-red navBar-1 efeito col-sm-12">
        <a className="navbar-brand container col-sm-6" href="/">
          <h1 className="hlogo">GL-INFO</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 col-12" type="search" placeholder="Pesquisa" aria-label="Search"/>
            
          </form>
          <ul className="navbar-nav mr-2">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contato
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/ts">Lista</a>
                <a className="dropdown-item" href="#">Celular</a>
                <a className="dropdown-item" href="#">Video e Áudio</a>
                <a className="dropdown-item" href="#">Acessorios</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Peças</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Minha conta
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Compras</a>
                <a className="dropdown-item" href="#">Quero Ajuda com uma compra</a>
                <a className="dropdown-item" href="#">Politica de uso</a>
                <a className="dropdown-item" href="#">Sujestão</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Dados Pessoais</a>
              </div>
            </li>
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Computador</a>
                <a className="dropdown-item" href="#">Celular</a>
                <a className="dropdown-item" href="#">Video e Áudio</a>
                <a className="dropdown-item" href="#">Acessorios</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Peças</a>
              </div>
            </li>
          </ul>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/carrinho.png" alt="" className="carrinho"/>
          </a>
        </div>
      </nav>
    </div>
   );
}
 
export default Nav;
