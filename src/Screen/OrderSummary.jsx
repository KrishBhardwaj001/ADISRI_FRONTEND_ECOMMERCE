import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import '../Css/Order.css'
import { ORDER_CREATE_RESET } from '../constants/OrderConstants'
import { createOrder } from '../actions/OrderActions'

function OrderSummary() {
  const history=useNavigate()
  const orderCreate= useSelector(state=>state.orderCreate)
  const {order,error,success} = orderCreate
  const dispatch = useDispatch()
  const {userprofile} =useSelector(state =>state.user)


  const cart= useSelector(state => state.cart)
  cart.itemsPrice = cart.cartItems.reduce((acc, item) =>acc+item.price * item.qty,0).toFixed(2)
  cart.ShippingPrice = (cart.itemsPrice>1999 ? 0 : 50 ).toFixed(2)
  cart.TaxPrice = Number((0.082)*cart.itemsPrice).toFixed(2)
  cart.ToatalPrice = (Number(cart.TaxPrice) +Number(cart.ShippingPrice)+Number(cart.itemsPrice)).toFixed(2)

  useEffect(()=>{
    if(success){
        history(`/trackorder/${order.Order_Id}`)
        dispatch({type:ORDER_CREATE_RESET})

    }
},[success,history])

const placeorder =()=>{
  dispatch(createOrder({
      orderItems:cart.cartItems,
      shippingAddress: cart.shippingAddress,
      paymentMethod: cart.paymentMethod,
      itemsPrice:cart.itemsPrice,
      ShippingPrice:cart.ShippingPrice,
      TaxPrice : cart.TaxPrice,
      ToatalPrice : cart.ToatalPrice
  }))
}
    
  return (
    <div className='min-h-screen shipping-page'>
      <h1 className='User-name p-10 max-sm:text-xl'>Thanks For Ordering !</h1>
      <p className='order-id ml-10 border-b max-sm:text-lg '>Your Order Summary</p>
      <br />
        <div className='w-4/5 max-sm:w-full m-auto summary-container-1'>
             <div className=' leading-loose'>
                 <h3 className=' ml-10 order-id'>Shipping Details</h3>
                 <div className='ml-10'>
                     <ul>
                        <li className='flex logg space-x-3'>  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> <h3> {userprofile.email}</h3></li>
                        <li className='flex logg space-x-3 '> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><h3>9065754545</h3></li>
                     <li>

                        <p> <span className='font-bold'> Address: </span>D-258, Sector 63, Noida, Uttar Pradesh-201301</p>
                     </li>
                     <li>

                        <p> <span className='font-bold'>School Name </span>: Super Nova</p>
                     </li>
                     </ul>
                 </div>
             </div>
             <div className=' w-full bg-blue-300'>
             <div className="flex justify-center  md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-baseleading-4 text-gray-800">Subtotal</p>
              <p className="text-base  leading-4 text-gray-600">&#x20B9;56.00</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base  leading-4 text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium  leading-3 text-gray-800">STUDENT</span></p>
              <p className="text-base leading-4 text-gray-600">-&#x20B9;28.00 (50%)</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base  leading-4 text-gray-800">Shipping</p>
              <p className="text-base  leading-4 text-gray-600">&#x20B9;8.00</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base  font-semibold leading-4 text-gray-800">Total</p>
            <p className="text-base  font-semibold leading-4 text-gray-600">&#x20B9;36.00</p>
          </div>
        </div>
      
             </div>
        </div>
    </div>
    <div className='summary-container-1 gap-10 border-t p-4 w-4/5 max-sm:w-full m-auto max-sm:text-xs' >
    <div className='summary-container-1 w-full border shadow-md  ' >
      <div className='flex'>
         <div className='w-24 p-3 bg-green-100 shadow-lg' >
            <img className='rounded-sm' src="KIDS ACTIVITY BOOK B.jpg" alt=""/>
         </div>
         <div className='m-auto logg p-3'>
            <p> <b>Name</b></p>
            <p>KIDS ACTIVITY BOOK B</p>
         </div>
         </div>
         <div className='grid grid-cols-3'>
         <div className=' m-auto logg relative'>
           <p > <b> Quantity </b></p>
           <p className=''>2</p>
            
         </div>
         <div className='m-auto logg'>
            <p> <b> Price </b></p>
            <p>180/-</p>
         </div>
         <div className=' m-auto logg'>
            <p> <b> Total Price</b></p>
            <p> 360/-</p>
         </div>
        </div>
         </div>
         <div className=' m-auto w-3/4'>
           <button onClick={placeorder} disabled={cart.cartItems===0} className='transition-all duration-200 hover:bg-gray-800 p-4 w-full text-white bg-gray-700 '>ORDER</button>
         </div>
    </div>
    </div>
  )
}

export default OrderSummary