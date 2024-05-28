import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {S} from './components/pages/_styles';
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Error404} from "./components/pages/404";
import {Model} from "./components/Model";
import {Prices} from "./components/pages/Prices";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    ERROR: '/page/error',
    MICROTASKS: '/microtasks',
    MODEL: '/:model/:id',
    PRICES: '/prices'
} as const

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.Nav>
                    <S.NavWrapper>
                        <NavLink to={PATH.ADIDAS}>Adidas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PUMA}>Puma</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.ABIBAS}>Abibas</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink to={PATH.PRICES}>Prices for resellers</NavLink>
                    </S.NavWrapper>
                </S.Nav>
                <S.Content>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.ADIDAS}/>}/>
                        <Route path={PATH.MICROTASKS} element={<Navigate to={PATH.ADIDAS}/>}/>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>
                        <Route path={PATH.MODEL} element={<Model/>}/>
                        <Route path={PATH.PRICES} element={<Prices/>}/>
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>adidas 2023</S.Footer>
        </div>
    );
}

export default App;