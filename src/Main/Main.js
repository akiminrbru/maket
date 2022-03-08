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
            <div className="content__5">
                <div><h1 className="text__h1">Проекты команды productfit</h1></div>
                <div className="projects">
                    <div className="projects__element">
                        <img src="/picture/content5/1.png"></img>
                        <h4 className="text__h4">Cabify</h4>
                        <p className="text__p">
                            Кроссплатформенное приложение <br/>
                            под Android и iOS разработано на <br/>
                            React Native(Python)
                        </p>
                    </div>
                    <div className="projects__element">
                        <img src="/picture/content5/2.png"></img>
                        <h4 className="text__h4">Ural Airlines</h4>
                        <p className="text__p">
                            Все сервисы для пассажиров <br/>
                            «Уральских авиалиний» в одном  <br/>
                            приложении на Swift и Java
                        </p>
                    </div>
                    <div className="projects__element">
                        <img src="/picture/content5/3.png"></img>
                        <h4 className="text__h4">OpenGift</h4>
                        <p className="text__p">
                            Система монетизации <br/>
                            OpenSource-проектов на основе <br/>
                            блокчейна hyperledger fabric
                        </p>
                    </div>
                    <div className="projects__element">
                        <img src="/picture/content5/4.png"></img>
                        <h4 className="text__h4">PlanDi</h4>
                        <p className="text__p">
                            Сервис поиска актуальной работы <br/>
                            проектировщикам и компаниям
                        </p>
                    </div>
                    <div className="projects__element">
                        <img src="/picture/content5/5.png"></img>
                        <h4 className="text__h4">Коалиция</h4>
                        <p className="text__p">
                            Проект для ведущего в России Центра <br/>
                            образования, который осуществляет <br/>
                            подготовку школьников к сдаче ЕГЭ.
                        </p>
                    </div>
                    <div className="projects__element">
                        <img src="/picture/content5/6.png"></img>
                        <h4 className="text__h4">Rubetek</h4>
                        <p className="text__p">
                            Управление домом IoT <br/>
                            и микрофреймворк на языке Python <br/>
                            совместно с Java и Swift
                        </p>
                    </div>
                </div>
                <div><button className="button__all">Все проекты</button></div>
            </div>
            <div className="content__8">
                <div>
                    <img src="/picture/content8/Group.svg"></img>
                </div>
                <div>
                    <button className="button__request">Оставить заявку</button>
                </div>
            </div>
        </div>
    );
}


export default Main;
