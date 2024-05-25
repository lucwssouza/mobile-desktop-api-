import React, { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

function getImagePath(productName) {
    switch (productName) {
        case 'Pastel de carne':
            return require("../assets/Pastel3.png");
        case 'Pastel de queijo':
            return require("../assets/Pastel3.png");
        case 'Pastel de pizza':
            return require("../assets/pastelpizza.png");
        case 'Frango c/ catupiry':
            return require("../assets/frangocatupiry.png");
        case 'Mini pasteis':
            return require("../assets/mini-pastel.png");
        case 'Caldo de cana':
            return require("../assets/caldin.png");
        case 'Coca-cola':
            return require("../assets/coca.png");
        case 'ÁGUA CRYSTAL':
            return require("../assets/agua.png");
        default:
            return require("../assets/default.png");
    }
}

export const CarrinhoProvider = ({ children }) => {
    const [itensCarrinho, setItensCarrinho] = useState([]);

    const adicionarAoCarrinho = (item) => {
        const image = getImagePath(item.nome);
        setItensCarrinho(current => {
            const itemFound = current.find(i => i.nome === item.nome);
            if (itemFound) {
                return current.map(i => i.nome === item.nome ? {
                    ...i,
                    quantidade: i.quantidade + item.quantidade,
                    valorTotal: (i.quantidade + item.quantidade) * i.precoUnitario
                } : i);
            }
            return [...current, { ...item, image, valorTotal: item.quantidade * item.precoUnitario }];
        });
    };

    const limparCarrinho = () => {
        setItensCarrinho([]); 
    };

    const removerDoCarrinho = (nome) => {
        setItensCarrinho(current => current.filter(item => item.nome !== nome));
    };

    return (
        <CarrinhoContext.Provider value={{ itensCarrinho, adicionarAoCarrinho, removerDoCarrinho, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};
