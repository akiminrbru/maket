import React from "react";
import "./main.css";

function Main() {
    return (
        <div className="content__1">
            <div>
                <p className="text__1">Разработка <br/> IT-ПРОДУКТОВ</p>
                <p className="text__2">Разрабатываем проект с нуля,<br/>
                   доработаем текущий проект или усилим вашу <br/>
                   ИТ-команду лучшими разработчиками на рынке</p>
                <button className="start__project">Начать новый проект</button>
            </div>
            <div><img src="/Frame.svg"></img></div>
        </div>
    );
}


export default Main;
