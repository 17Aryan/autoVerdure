import React, {createContext, useState, useContext, useEffect} from "react";

const OrderContext = createContext();

export const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);
    const fetchOrders = async () =>{
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data);
    };

    const updatedOrder = (updatedOrder) =>{
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === updatedOrder.id ? updatedOrder : order
            )
          );
        };
    return (
        <OrderContext.Provider value={{ orders, updatedOrder, fetchOrders }}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderContext;