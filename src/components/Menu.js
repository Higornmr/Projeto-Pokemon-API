import React from 'react'

import caminho from "../img/Caminho.png"
import config from "../img/config.png"
import conquist from "../img/conquist.png"
import dashboard from "../img/dashboard.png"
import help from "../img/help.png"
import voltbras from "../img/Voltbras.png"
import retangulo from "../img/retangulo.png"


export const Menu = () => {
    return (
        <div>
            <nav className="navbar">
                <a className="navbar-item">
                    <img src={voltbras} className="voltbras" />
                    <span className='voltbrasSpan'>Voltbras App</span>
                </a>
                <a className="navbar-item active">
                    <div>
                        <img src={retangulo} className="fundo" />
                        <img src={caminho} className="lista" />
                        <span className='listaSpan'>Lista</span>
                    </div>
                </a>
                <a className="navbar-item">
                    <img src={conquist} />
                    <span>Conquistas</span>
                </a>
                <a className="navbar-item">
                    <img src={dashboard} />
                    <span>Pokédex</span>
                </a>
                <a className="navbar-item">
                    <img src={help} />
                    <span>Ajuda</span>
                </a>
                <a className="navbar-item">
                    <img src={config} />
                    <span>Configuração</span>
                </a>
            </nav>
        </div>
    )
}
