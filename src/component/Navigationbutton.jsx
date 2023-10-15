import React from 'react'
import "./navbtn.css"
import { UilDashboard } from '@iconscout/react-unicons';
import { UilCube } from '@iconscout/react-unicons'
import { UilUser } from '@iconscout/react-unicons'
import { UilCoins } from '@iconscout/react-unicons'
import { UilCommentAltShare } from '@iconscout/react-unicons'
import { UilQuestion } from '@iconscout/react-unicons'
import { UilAngleRight } from '@iconscout/react-unicons'
export const Navigationbutton = (props) => {
  return (
    <div className='navbtn'>
        <div className="pack">
        <div className="logo">{props.iconcomp}</div>
        <p>{props.page}</p>
        </div>
        
        <div className="arrow"><UilAngleRight /></div>
    </div>
  )
}
