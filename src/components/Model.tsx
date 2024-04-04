import React from 'react';
import {adidasArr, AdidasItem} from "./pages/Adidas";
import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./pages/Puma";

type GlobalArray = {
    [key: string]: PumaItem[] | AdidasItem[]
};

const globalArray: GlobalArray = {
    puma: pumaArr,
    adidas: adidasArr,
}

export const Model = () => {
    const {model, id} = useParams();

    let currentModel

    if (model) {
        currentModel = globalArray[model].find(m => m.id === Number(id))
    }

    return (
        <div>
            {
                currentModel
                    ? <>
                        <h2>{currentModel.model}</h2>
                        <h4>{currentModel.collection}</h4>
                        <h3>{currentModel.price}</h3>
                        <div>
                            <img src={currentModel.picture}
                                 alt={currentModel.model}
                                 width={'auto'}/>
                        </div>
                    </>
                    : <h2>Такой модели не существует</h2>
            }

        </div>
    );
};