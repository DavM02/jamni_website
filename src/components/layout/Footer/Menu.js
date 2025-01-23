import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='footer-menu row wrap s-between gap-50'>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"catalog/bedsheets"}>Постельное белье</Link>
                </li>
                <li>
                    <Link>Аксессуары из войлока</Link>
                </li>
                <li>
                    <Link to={"catalog/curtains"}>Шторы</Link>
                </li>
                <li>
                    <Link>Horeca</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"catalog/sofas"}>Диваны</Link>
                </li>
                <li>
                    <Link to={"catalog/beds"}>Кровати</Link>
                </li>
                <li>
                    <Link to={"catalog/frameless"}>Бескаркасная мебель</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"catalog/armchairs"}>Кресла</Link>
                </li>
                <li>
                    <Link to={"catalog/chairs"}>стулья</Link>
                </li>
                <li>
                    <Link to={"catalog/poufs"}>Пуфы и банкетки</Link>
                </li>
                <li>
                    <Link to={"catalog/outdoor"}>Уличная мебель</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"/order"}>Оплата</Link>
                </li>
                <li>
                    <Link to={"/order"}>доставка</Link>
                </li>
                <li>
                    <Link to={"/order"}>реквизиты</Link>
                </li>
            </ul>
        </div>
    )
}
