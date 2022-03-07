import React from "react";
import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="info">
                <div><img src="/picture/header/Logo.svg"></img></div>
                <div>
                    <p className="text">Мобильные приложения</p>
                    <p className="text">Главная страница</p>
                </div>
                <div>
                    <p className="text__bold">Связаться с нами</p>
                    <div>
                        <img src="/picture/header/phone.svg"></img>
                        <span className="text__bold">+7 800 301 25-32</span>
                    </div>
                </div>
                <div><img src="/picture/header/telegram.svg"></img></div>
                <div><img src="/picture/header/mail.svg"></img></div>
                <div className="back"><img src="/picture/header/blocknot.svg"></img></div>
                <div>
                    Индивидуальный предприниматель <br/>
                    Степанов Георгий Константинович <br/>
                    Адрес: г. Обнинск, ул. Белкинская. 19, <br/>
                    136 ОГРНИП 318402700019269 ИНН <br/>
                    402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ <br/>
                    АО КБ "МОДУЛЬБАНК" <br/>
                    БИК 044525092 К/c 30101810645250000092 <br/>
                    Счет 40802810970010085488 <br/>
                </div>
            </div>
            <div className="copy">
                Copyright © 2022
            </div>
        </div>
    );
}

export default Footer;