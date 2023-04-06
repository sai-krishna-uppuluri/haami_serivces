import React from 'react'
import procedure from '../styles/Procedure.module.css'
import {RiNumber1 , RiNumber2, RiNumber3, RiNumber4} from 'react-icons/ri'
// import {TfiWrite} from 'react-icons/tfi'

function Procedure() {
  return (
    <div className={procedure.procedureContainer}>
        <h1 className={procedure.headingProcedure}> How it Works..</h1>
            <div className={procedure.innerContainer}>
                <div className={procedure.procedureInnerContainer}>
                    <div className={procedure.eachProcedureContainer}>
                        <RiNumber1 size={60} className = {procedure.icon} />
                        <h1 className={procedure.procedureText}> Your Requirements</h1>
                     </div>
                </div>
                <div className={procedure.procedureInnerContainer}>
                    <div className={procedure.eachProcedureContainer}>
                        <RiNumber2 size={60} className = {procedure.icon} />
                        <h1 className={procedure.procedureText}> Cost Estimation</h1>
                     </div>
                </div>
                <div className={procedure.procedureInnerContainer}>
                    <div className={procedure.eachProcedureContainer}>
                        <RiNumber3 size={60} className = {procedure.icon} />
                        <h1 className={procedure.procedureText}> Execution</h1>
                     </div>
                </div>
                <div className={procedure.procedureInnerContainer}>
                    <div className={procedure.eachProcedureContainer}>
                        <RiNumber4 size={60} className = {procedure.icon} />
                        <h1 className={procedure.procedureText}> Project Delivery</h1>
                     </div>
                </div>
        </div>
      </div>
  )
}

export default Procedure