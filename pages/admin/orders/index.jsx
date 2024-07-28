import React, { useState } from "react";
import OrderList from "../orderlist";

const AdminOrders = (props) => {
  const orders = props.orders;
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Handle the click on an order
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="py-[62px] md:pt-[132px] md:pb-[188px] xl:pt-[106px] xl:pb-[260px] 2xl:pb-[320px] px-4 md:px-[51px] xl:px-[216px] 2xl:px-[270px] flex flex-col gap-5 bg-[#FFFCF8]">
      {!selectedOrder && (
        <table rules="all">
          <thead className="w-full px-[25px] mt-[30px] hidden md:flex flex-col gap-5">
            <tr className="justify-start items-start inline-flex flex justify-between items-center px-[35px]">
              <td className="w-[160px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Email</td>
              <td className="w-[80px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Name</td>
              <td className="w-[90px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Payment</td>
              <td className="w-[145px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Delivery Status</td>
              <td className="w-[70px] text-gray-900 text-xs font-normal font-['Poppins'] tracking-tight">Time</td>
            </tr>
          </thead>

          <OrderList orders={orders} onOrderClick={handleOrderClick} />
        </table>
      )}
      {selectedOrder && (
        <div className="mt-[30px]">
          <OrderList orders={[selectedOrder]} />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ req, res }) {
  const currentUser = (await import("@/lib/server/currentUser")).default;
  const findAdminOrders = (await import("@/pages/api/orders/findAdminOrders")).default;

  const user = await currentUser(req);

  if (user.admin) {
    const orders = await findAdminOrders();
    return {
      props: {
        orders: orders
      }
    }
  } else {
    return {
      props: {
        orders: []
      }
    }
  }
}

export default AdminOrders;
