import React from "react";
import "./main.css";

function Main() {
    return (
        <div className="content">
            <div className="content__1">
                <div>
                    <p className="text__1">Разработка <br/> IT-ПРОДУКТОВ</p>
                    <p className="text__2">Разрабатываем проект с нуля,<br/>
                    доработаем текущий проект или усилим вашу <br/>
                    ИТ-команду лучшими разработчиками на рынке</p>
                    <button className="start__project">Начать новый проект</button>
                </div>
                <div><img src="/picture/Frame.svg"></img></div>
            </div>
            <div className="content__2">
                <div className="partners">
                    <div className="elem"><img src="/picture/content2/wooter.svg"></img></div>
                    <div className="elem"><img src="/picture/content2/smartbar.svg"></img></div>
                    <div className="elem"><img src="/picture/content2/cabify.svg"></img></div>
                    <div className="elem"><img src="/picture/content2/kari.svg"></img></div>
                    <div className="elem"><img src="/picture/content2/ural.svg"></img></div>
                </div>
            </div>
            <div className="content__3">
                <div className="box"><img src="/picture/content3/1.svg"></img><p>ПРОВЕДЁМ ИНТЕРВЬЮ</p></div>
                <div className="box"><img src="/picture/content3/2.svg"></img><p>СОСТАВИМ ПЛАН</p></div>
                <div className="box"><img src="/picture/content3/3.svg"></img><p>СОБЕРЁМ КОМАНДУ</p></div>
                <div className="box"><img src="/picture/content3/4.svg"></img><p>РАЗРАБОТАЕМ ПРОДУКТ</p></div>
                <div className="box"><img src="/picture/content3/5.svg"></img><p>УЛУЧШИМ МЕТРИКИ</p></div>
            </div>
            <div className="content__4">
                <div>
                    <img src="/picture/content4/1.svg"></img>
                </div>
                <div>
                    <p className="text__1">Проведём интервью <br/> и подготовим проект <br/> к разработке</p>
                    <p className="text__2">Проведём продуктовое интервью онлайн<br/>
                    и дадим рекомендации по подготовке проекта <br/>
                    к разработке. Это бесплатно.</p>
                    <button className="start__interview">Записаться на интервью</button>
                </div>
            </div>
        </div>
    );
}


export default Main;
