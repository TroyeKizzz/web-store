import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import OrderList from "../components/OrderList";
import { userService } from "../firebase-config";

const OrderHistoryScreen = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    userService.getMyOrders().then((res) => {
      setOrders(res);
    });
  }, []);
  return (
    <div>
      <Header />
      {orders?.map((order) => (
        <OrderList data={order} key={order.id} />
      ))}
      {(!orders || orders?.length === 0) && (
        <p style={{ textAlign: "center" }}>You haven't bought anything yet</p>
      )}
    </div>
  );
};

export default OrderHistoryScreen;
