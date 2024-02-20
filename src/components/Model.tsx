import React from 'react';
import {adidasArr} from "./pages/Adidas";
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams();
    const currentModel = adidasArr.find(model => model.id === Number(params.id))
    console.log(params)
    return (
        <div>
            {
                currentModel
                    ? <>
                        <h2>{adidasArr[Number(params.id)].model}</h2>
                        <h4>{adidasArr[Number(params.id)].collection}</h4>
                        <h3>{adidasArr[Number(params.id)].price}</h3>
                        <div>
                            <img src={adidasArr[Number(params.id)].picture}
                                 alt={adidasArr[Number(params.id)].model}
                                 width={'auto'}/>
                        </div>
                    </>
                    : <h2>Такой модели не существует</h2>
            }

        </div>
    );
};