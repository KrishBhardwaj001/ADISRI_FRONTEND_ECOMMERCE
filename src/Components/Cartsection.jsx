import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/CartActions";
import '../Css/cart.css'
function Cartsection() {

  const { id } = useParams();
  const location = useLocation();
  const productId = id;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cartItems);
   const [Quantity, setquantity] = useState(1);
 const [Price ,setPrice]=useState(0)
 const [flag,setflag]= useState(false)
  useEffect(() => {
   
    let cartitems2=cart
    let sum=0
    cartitems2.map((books)=>{
      sum+=books.qty*books.price
    })
    setPrice(sum)  
    if (cart.length==0) {
        setflag(false)
    }
    else{
      setflag(true)
    }
  }, [dispatch,Quantity,cart]);


  

  const removeFromCartHandler = (id) => {
   
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <br /><br />
      {flag ? (
        
          <div className="bg-purple-200 p-3  sm:flex sm:h-screen  ">
            <div className="w-3/5 max-sm:w-full">
      
              {cart.map((books, index) => {
                return (
                  <div key={index} className="full relative products   rounded-md space-y-3">
                    <div
                      
                      className="absolute top-4 right-3 bg-white cursor-pointer rounded-full p-3 "
                      onClick={() => removeFromCartHandler(books.product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                        height="16px"
                        width="16px"
                        version="1.1"
                        id="Capa_1"
                        viewBox="0 0 490 490"
                        xmlSpace="preserve"
                      >
                        <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490   489.292,457.678 277.331,245.004 489.292,32.337 " />
                      </svg>
                    </div>
                      <div className="sm:flex  w-full ">
                       <div className="w-1/4 max-sm:w-full   p-2">
                         <img className="w-3/5 m-auto max-sm:w-1/4 " src={books.image} alt="productimage"  />
                       </div>
                       <div className="w-3/4 max-sm:w-full  space-y-3 p-3">
                               <h1 className="title_of_bboks">{books.name}</h1>
                               <h3>
                                Price :&#8377;{books.price}
                               </h3>
                               <div className="w-1/5 max-sm:w-4/5">
                        <h3 className="flex gap-3   p-3">
                          <button
                            className="cursor-pointer"
                            onClick={(e) => {
                              let id = books.product;
                              if (books.qty > 1) {
                                 let qty = --books.qty
                                 setquantity(qty)
                                dispatch(addToCart(id, qty));
                              }
                            }}
                          >
                            <svg
                              className="bg-white"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#000"
                            >
                              <path d="M200-440v-80h560v80H200Z" />
                            </svg>
                          </button>
                          Quantity:{books.qty}
                          <button
                            onClick={()=> {
                              let id = books.product;
                              let quantity = ++books.qty;
                              setquantity(quantity)
                              dispatch(addToCart(id, quantity));
                            }}
                          >
                            <svg
                              className="bg-white"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24px"
                              viewBox="0 -960 960 960"
                              width="24px"
                              fill="#000"
                            >
                              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                            </svg>
                          </button>
                        </h3>
                      </div>
                       </div>
                      </div>
                    
                  </div>
                );
              })}
            </div>
            <div className="w-2/5 p-4 rounded-xl h-96 max-sm:w-full right-0  logg flex justify-center ">
              <div className="cart-section2  bg-purple-300 border-2 border-white rounded-xl  h-full grid grid-rows-4 w-full   ">
                <h1 className="text-xl grid grid-cols-2  justify-center  m-auto">
                  {" "}
                  <p className=" "> Total MRP &nbsp;&nbsp; </p>
                  <p>:&#x20B9;{Price} </p>{" "}
                </h1>

                <h1 className="text-lg  grid grid-cols-2  justify-center m-auto ">
                  {" "}
                  <p className=" "> Discount &nbsp;&nbsp; </p>
                  <p>:&#x20B9;0 </p>{" "}
                </h1>

                <h1 className="text-xl grid grid-cols-2  justify-center m-auto">
                  {" "}
                  <p className=" "> Total &nbsp;&nbsp; </p>
                  <p>:&#x20B9;{Price} </p>{" "}
                </h1>

                <h1 className="text-xl grid grid-cols-2  justify-center m-auto">
                  {" "}
                  <p className=""> Grand Total &nbsp;&nbsp; </p>
                  <p>:&#x20B9;{Price} </p>{" "}
                </h1>

                <Link to="/checkout">  <button className="w-1/2 m-auto transition-all duration-300  overflow-hidden space-x-2 rounded-full text-center justify-center hover:bg-purple-400 cursor-pointer p-4  bg-white  flex">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000"
                  >
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                  </svg>
                  <span className="text-black">Checkout</span>
                </button>
                  </Link>
                <br />
              </div>
            </div>
          </div>
       
      ) : (
        <>
          <div className="w-full h-full">
        <h1 style={{fontSize:"5vw",display:"flex",justifyContent:"center" ,opacity:"0.4"}}>Empty Cart</h1>
            <svg
             className="w-1/4 m-auto opacity-45 h-2/4"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              width="800px"
              height="800px"
              viewBox="0 0 548 547.999"
              xmlSpace="preserve"
            >
              <g>
                <path d="M409.545,185.969l-179.165-7.724c-5.12-0.247-9.439,3.748-9.658,8.86c-0.219,5.115,3.748,9.439,8.855,9.659l167.04,7.204   l-32.842,102.468H217.621l-26.404-143.769c-0.579-3.155-2.749-5.783-5.727-6.954l-43.245-16.99   c-4.77-1.862-10.142,0.474-12.016,5.239c-1.869,4.765,0.474,10.146,5.239,12.015l38.447,15.105L200.79,317.38   c0.807,4.396,4.639,7.594,9.112,7.594h4.459l-10.179,28.273c-0.852,2.366-0.501,4.998,0.945,7.061   c1.449,2.054,3.804,3.281,6.319,3.281h7.138c-4.424,4.924-7.138,11.411-7.138,18.533c0,15.331,12.473,27.797,27.799,27.797   c15.332,0,27.804-12.471,27.804-27.797c0-7.122-2.719-13.609-7.141-18.533h60.616c-4.425,4.924-7.141,11.411-7.141,18.533   c0,15.331,12.47,27.797,27.797,27.797s27.802-12.471,27.802-27.797c0-7.122-2.721-13.609-7.141-18.533h8.695   c4.266,0,7.719-3.458,7.719-7.724c0-4.267-3.458-7.72-7.719-7.72H222.438l8.34-23.167h139.761c4.027,0,7.593-2.6,8.82-6.44   l38.615-120.474c0.887-2.751,0.43-5.757-1.223-8.128C415.099,187.556,412.434,186.093,409.545,185.969z M341.192,369.764   c6.813,0,12.349,5.544,12.349,12.354s-5.545,12.354-12.349,12.354c-6.814,0-12.358-5.544-12.358-12.354   C328.833,375.304,334.373,369.764,341.192,369.764z M239.251,369.764c6.814,0,12.358,5.544,12.358,12.354   s-5.544,12.354-12.358,12.354c-6.81,0-12.354-5.544-12.354-12.354C226.897,375.304,232.437,369.764,239.251,369.764z    M385.211,63.391l13.497-23.38c2.487-4.31,7.999-5.778,12.288-3.292c4.308,2.485,5.778,7.985,3.291,12.291l-13.488,23.379   c-1.671,2.887-4.695,4.501-7.804,4.501c-1.525,0-3.08-0.387-4.489-1.204C384.204,73.196,382.728,67.696,385.211,63.391z    M472.323,159.502c-2.488-4.3-1.013-9.805,3.29-12.293l23.382-13.495c4.294-2.485,9.811-1.018,12.293,3.292   c2.483,4.301,1.009,9.808-3.295,12.293l-23.382,13.495c-1.419,0.821-2.959,1.208-4.49,1.208   C477.013,164.003,473.989,162.389,472.323,159.502z M548,274.004c0,4.971-4.033,8.999-9.003,8.999h-26.995   c-4.961,0-8.998-4.028-8.998-8.999c0-4.97,4.037-8.998,8.998-8.998h26.995C543.966,265.006,548,269.034,548,274.004z    M511.288,411.002c-1.671,2.884-4.694,4.499-7.803,4.499c-1.526,0-3.076-0.393-4.49-1.204L475.613,400.8   c-4.303-2.492-5.778-7.99-3.29-12.293c2.478-4.304,7.999-5.778,12.288-3.295l23.382,13.497   C512.296,401.191,513.771,406.698,511.288,411.002z M414.288,498.999c2.487,4.299,1.017,9.806-3.291,12.289   c-1.414,0.821-2.963,1.213-4.494,1.213c-3.099,0-6.133-1.614-7.799-4.503l-13.492-23.378c-2.487-4.303-1.018-9.811,3.285-12.293   c4.304-2.482,9.811-1.022,12.294,3.285L414.288,498.999z M282.993,512.002l0.01,26.994c0,4.971-4.028,9.003-9.003,9.003   c-4.966,0-8.998-4.027-8.998-8.998l-0.005-26.994c0-4.966,4.023-9.003,8.998-9.003   C278.965,503.004,282.993,507.031,282.993,512.002z M162.786,484.611L149.3,507.998c-1.668,2.889-4.695,4.503-7.81,4.503   c-1.524,0-3.073-0.392-4.483-1.213c-4.305-2.483-5.783-7.98-3.297-12.289l13.49-23.387c2.49-4.308,8.006-5.768,12.298-3.295   C163.793,474.801,165.275,480.308,162.786,484.611z M75.677,388.497c2.49,4.303,1.017,9.811-3.288,12.293l-23.384,13.507   c-1.414,0.812-2.964,1.204-4.487,1.204c-3.111,0-6.13-1.615-7.804-4.499c-2.485-4.304-1.013-9.811,3.293-12.293l23.379-13.497   C67.691,382.72,73.191,384.194,75.677,388.497z M36.002,283.003H9.003c-4.968,0-9.003-4.028-9.003-8.999   c0-4.97,4.028-8.998,9.003-8.998l26.999-0.005c4.97,0,8.998,4.028,8.998,8.999C45,278.97,40.972,283.003,36.002,283.003z    M75.686,159.502c-1.673,2.887-4.693,4.497-7.808,4.497c-1.526,0-3.073-0.388-4.487-1.204L40.001,149.3   c-4.301-2.492-5.778-7.992-3.292-12.298c2.49-4.296,7.99-5.777,12.295-3.292l23.384,13.495   C76.694,149.685,78.167,155.197,75.686,159.502z M133.709,49.004c-2.49-4.301-1.013-9.81,3.288-12.291   c4.305-2.485,9.817-1.013,12.291,3.288l13.506,23.385c2.485,4.305,1.013,9.81-3.292,12.291c-1.418,0.821-2.963,1.213-4.492,1.213   c-3.102,0-6.133-1.615-7.799-4.501L133.709,49.004z M265.001,35.997V8.998C265.001,4.028,269.034,0,274,0   c4.971,0,9.003,4.028,9.003,8.998v26.999c0,4.975-4.032,9.003-9.003,9.003C269.034,45,265.001,40.972,265.001,35.997z" />
              </g>
            </svg>
          </div>
        </>
      )}
    </>
  );
}

export default Cartsection;
