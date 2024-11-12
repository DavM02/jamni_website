import React from 'react'
import userIcon from '../../../assets/icons/user.svg'
import heartIcon from '../../../assets/icons/heart.svg'
import bagIcon from '../../../assets/icons/shopping-bag.svg'

export default function UserIcons() {
    return (
        <div className='icons row end-x gap-25'>
            <div className='icon'>
                <img src={userIcon} alt='user-icon' />
            </div>
            <div className='icon'>
                <img src={heartIcon} alt='heart-icon' />
            </div>
            <div className='icon'>
                <img src={bagIcon} alt='bag-icon' />
            </div>
        </div>
    )
}
