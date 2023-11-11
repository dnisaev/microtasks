import React, {useState} from 'react';

type onClickFilterHandlerPropsType = "Dollars" | "Rubls" | "All"
export const ButtonFilter = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'Rubls', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'Rubls', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'Rubls', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState('all')

    let currentMoney = money

    if (filter === "Rubls") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Rubls')
    } else if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }

    const onClickFilterHandler = (props: onClickFilterHandlerPropsType) => {
        setFilter(props)
    }

    return (
        <div>
            <ul>
                {currentMoney.map((objectFilterMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span> {objectFilterMoneyArray.banknots}</span>
                            <span> {objectFilterMoneyArray.value}</span>
                            <span> {objectFilterMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => onClickFilterHandler("All")}>All</button>
                <button onClick={() => onClickFilterHandler("Rubls")}>Rubls</button>
                <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>
            </div>
        </div>
    );
};