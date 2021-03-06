import React from 'react'
import './../css/result.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';


const Resultbox=( props ) => {

  const { num1, num2, num3, num4, label="Winner" }=props;

  // console.log( "---->", num1 )
  const buttons=[
    <Button key="one" class="single_box" disabled>{num1===null? "-":num1}</Button>,
    <Button key="two" class="single_box" disabled>{num2===null? "-":num2}</Button>,
    <Button key="three" class="single_box" disabled>{num3===null? "-":num3}</Button>,
    <Button key="four" class="single_box" disabled>{num4===null? "-":num4}</Button>,
  ];


  return (

    <>

      {/* <span className='my-4 fw-bold'>{label} :</span> */}
      <ButtonGroup size="large" className="my-4 main_btn_box" aria-label="large button group">
        {buttons}
      </ButtonGroup>

    </>


  )
}

export default Resultbox