import React from "react";
import Usuario from "./Componentes/Img/Usuario.png"

export function InfosUsuario() {
    const nomeUsuario = "Aline"
    return (
        <>
            <div className="usuario">
                <img src={Usuario} />
                <h4>{nomeUsuario}</h4>
            </div>
        </>
    )
}