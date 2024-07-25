import React, { useState } from 'react';
import './styles.css'; 

const OrderList = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
//   const [unprocessedOrders, setUnprocessedOrders] = useState(orders);
  const [review, setReview] = useState('');  

  const handleOrderClick = (order) => {
    // setClickedOrders([...clickedOrders, order]);
    // setUnprocessedOrders(unprocessedOrders.filter(o => o !== order));
    setSelectedOrder(order);
  };

  const handleInputChange = (e) =>{
    // const { name, value } = e.target;
    setReview(e.target.value);
  };

  const handleSubmitReview = () => {
    console.log('Review Submitted:',review);
  };

  const mockData = orders.map(order => ({
    ...order,
    orderedProducts: order.orderedProducts.map(product => ({
      ...product,
      imageUrl: 'https://via.placeholder.com/350x350',
      potSize: '12 x 16 inch',
      arrivalTime: 'Arriving in 2 days'
    }))
  }))

  if (selectedOrder) {
    return (
      <div className="h-[765px] justify-start items-start gap-[92px] inline-flex">
        <div className="flex-col justify-start items-start gap-4 inline-flex">
          <img
            className="w-[350px] h-[350px] rounded-[38.54px]"
            src={selectedOrder.orderedProducts[0].imageUrl}
            alt="Product"
          />
          <div className="justify-start items-start gap-3 inline-flex">
            {selectedOrder.orderedProducts.slice(1).map((product, index) => (
              <img
                key={index}
                className="w-[135px] h-[135px] rounded-xl"
                src={product.imageUrl}
                alt={`Product ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex-col justify-start items-center gap-[27px] inline-flex">
          <div className="flex-col justify-start items-start gap-[31px] flex">
            <div className="flex-col justify-center items-start gap-5 flex">
              <div className="w-[393px] text-[#151c28] text-[32px] font-bold font-['Urbanist'] tracking-wide">
                {selectedOrder.orderedProducts[0].productName + 
                  ((selectedOrder.orderedProducts.length === 1) ? '' : `+ ${selectedOrder.orderedProducts.length - 1} more`)}
              </div>
              <div className="text-[#585562] text-base font-normal font-['Urbanist'] tracking-tight">
                {selectedOrder.shippingAddress.city}
              </div>
              <div className="text-[#585562] text-base font-normal font-['Urbanist'] tracking-tight">
                Pot Size: {selectedOrder.orderedProducts[0].potSize}
              </div>
              <div className="text-[#585562] text-base font-normal font-['Urbanist'] tracking-tight">
                Paid
              </div>
              <div className="text-[#585562] text-base font-normal font-['Urbanist'] tracking-tight">
                Order ID: {selectedOrder.orderId}
              </div>
              <div className="w-[130px] h-[34px] px-4 py-2 bg-[#fff4ea] rounded-[20px] flex-col justify-start items-start gap-2.5 flex">
                <div className="text-center text-[#fb7e15] text-xs font-normal font-['Urbanist'] tracking-tight">
                  {selectedOrder.orderedProducts[0].arrivalTime}
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="text-[#9a5cf5] text-base font-medium font-['Urbanist']">
                View guides related to your product
              </div>
            </div>
          </div>
          <div className="flex-col justify-end items-end gap-5 flex">
            <div className="flex-col justify-start items-start gap-[17px] flex">
              <div className="text-black text-xl font-semibold font-['Urbanist']">
                Add a review
              </div>
              <div className="justify-start items-start gap-[74px] inline-flex">
                <div className="text-black text-xs font-normal font-['Urbanist'] leading-relaxed">
                  Select Rating
                </div>
                <div className="w-[106.67px] h-5 relative">
                  <div className="w-[106.67px] h-5 left-0 top-0 absolute"></div>
                </div>
              </div>
              <div className="justify-start items-start gap-[60px] inline-flex">
                <div className="justify-start items-start gap-[74px] flex">
                  <div className="text-black text-xs font-normal font-['Urbanist'] leading-relaxed">
                    Add Comments
                  </div>
                </div>
                <input
                  className="w-[245px] h-[113px] bg-[#fffcf8] rounded-xl border border-black p-2"
                  value={review}
                  onChange={handleInputChange}
                  placeholder="Add your review here"
                />
              </div>
              <div className="justify-start items-start gap-[84px] inline-flex">
                <div className="justify-start items-start gap-[84px] flex">
                  <div className="justify-start items-start gap-[74px] flex">
                    <div className="text-black text-xs font-normal font-['Urbanist'] leading-relaxed">
                      Add Photos
                    </div>
                  </div>
                </div>
                <div className="w-[245px] h-[113px] relative">
                  <div className="w-[245px] h-[113px] left-0 top-0 absolute bg-[#fffcf8] rounded-xl border border-black"></div>
                  <img
                    className="w-[223px] h-[92px] left-[12px] top-[10px] absolute rounded"
                    src="https://via.placeholder.com/223x92"
                    alt="Review"
                  />
                </div>
              </div>
            </div>
            <div className="px-[42px] py-[18px] bg-[#9a5cf5] rounded-[100px] justify-start items-start gap-2.5 inline-flex" onClick={handleSubmitReview}>
              <div className="text-white text-base font-medium font-['Urbanist']">
                Submit review
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderOrderList = () => (
    <tbody className="mt-[30px] hidden md:flex flex-col gap-5">
      {mockData.map((order, index) => (
        <tr
          key={index}
          className="px-[35px] py-[38px] text-xs w-full border-[1px] border-black rounded-2xl bg-white flex justify-between items-center cursor-pointer"
          onClick={() => handleOrderClick(order)}
        >
          <td className="w-[150px]">
            {order.orderedProducts[0].productName + 
              ((order.orderedProducts.length === 1) ? '' : `+ ${order.orderedProducts.length - 1} more`)}
          </td>
          <td>{order.shippingAddress.city}</td>
          <td>Product</td>
          <td>Paid</td>
          <td className={
            order.orderStatus === "Delivered"
              ? "px-4 py-2 rounded-[20px] w-[130px] flex justify-center items-center bg-secondarySuccessAlerts bg-opacity-10 text-secondarySuccessAlerts"
              : "px-4 py-2 rounded-[20px] w-[130px] flex justify-center items-center bg-[#FFF5EB] text-[#FB7E15]"
          }>
            {order.orderStatus}
          </td>
          <td width={"100px"}>{order.orderTime}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
      {selectedOrder ? renderOrderDetail(selectedOrder) : renderOrderList()}
    </div>
  );
};

export default OrderList;
