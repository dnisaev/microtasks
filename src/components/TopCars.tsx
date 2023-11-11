import React from 'react';

type NewComponentPropsType = {
    //topCars: Array<TopCarsPropsType>
    topCars: TopCarsPropsType[]
}

type TopCarsPropsType = {
    id: number
    manufacturer: string
    model: string
}

export const topCarsArray = [
    {id: 1, manufacturer:'BMW', model:'m5cs'},
    {id: 2, manufacturer:'Mercedes', model:'e63s'},
    {id: 3, manufacturer:'Audi', model:'rs6'}
]

export const TopCars = (props: NewComponentPropsType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Марка</th>
                <th>Модель</th>
            </tr>
            </thead>
            <tbody>
            {props.topCars.map((objectFromTopCarsArray, index) => {
                return (
                    <tr key={index}>
                        <td>{objectFromTopCarsArray.id}</td>
                        <td>{objectFromTopCarsArray.manufacturer}</td>
                        <td>{objectFromTopCarsArray.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

// export const NewComponent = (props: NewComponentPropsType) => {
//     return (
//         <ul>
//             {props.topCars.map((objectFromTopCarsArray, index) => {
//                 return (
//                     <li key={index}>
//                         <span>Марка: {objectFromTopCarsArray.manufacturer}, </span>
//                         <span>Модель: {objectFromTopCarsArray.model}</span>
//                     </li>
//                 )
//             })}
//         </ul>
//     );
// };