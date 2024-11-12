import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='footer-menu row wrap s-between gap-50'>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link>Постельное белье</Link>
                </li>
                <li>
                    <Link>Аксессуары из войлока</Link>
                </li>
                <li>
                    <Link>Шторы</Link>
                </li>
                <li>
                    <Link>Horeca</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link>Диваны</Link>
                </li>
                <li>
                    <Link>Кровати</Link>
                </li>
                <li>
                    <Link>Бескаркасная мебель</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link>Кресла</Link>
                </li>
                <li>
                    <Link>стулья</Link>
                </li>
                <li>
                    <Link>Пуфы и банкетки</Link>
                </li>
                <li>
                    <Link>Уличная мебель</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link>Оплата</Link>
                </li>
                <li>
                    <Link>дотавка</Link>
                </li>
                <li>
                    <Link>реквизиты</Link>
                </li>
            </ul>
        </div>
    )
}
