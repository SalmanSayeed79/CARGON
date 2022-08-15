package com.cargon.backend.application.Interface;

import com.cargon.backend.application.DTO.OrderProductdto;
import com.cargon.backend.application.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface OrderRepository extends JpaRepository<Order,Long> {

    @Query(value="SELECT order_id,delivery_start_date,delivered_to,distributor_id,order_price,wholesaler_id,is_wholesaler,product.name,image,brand,orders.product_id,chemical_name,intensity,variant FROM orders LEFT JOIN product ON product.product_id=orders.product_id",nativeQuery = true)
    List<Order> getAllOrders();
    @Query(value="SELECT COUNT(*) FROM orders",nativeQuery = true)
    long getOrderCount();
    @Query(value="SELECT COUNT(*) FROM orders ",nativeQuery = true)
    long getOrderCountToday(Date date);
    @Query(value="SELECT COUNT(*) FROM orders ",nativeQuery = true)
    long getFulfilledOrder();
    @Query(value="SELECT order_id,delivery_start_date,delivered_to,distributor_id,order_price,wholesaler_id,is_wholesaler,product.name,image,brand,orders.product_id,chemical_name,intensity,variant FROM orders LEFT JOIN product ON product.product_id=orders.product_id WHERE order_id=:orderID",nativeQuery = true)
    Order getOrderByID(long orderID);
    @Query(value="SELECT * FROM orders WHERE distributor_id=:id",nativeQuery = true)
    List<Order> getAllOrderByDistributor(long id);
    @Query(value="SELECT * FROM orders WHERE wholesaler_id=:id",nativeQuery = true)
    List<Order> getAllOrderByWholesaler(long id);
    @Query(value="SELECT DISTINCT orders.order_id FROM orders LEFT JOIN orderproduct ON orderproduct.order_id=orders.order_id LEFT JOIN product ON orderproduct.product_id= product.product_id WHERE product.factory_id=:id",nativeQuery = true)
    List<Object> getAllOrderByFactory(long id);

    @Transactional
    @Modifying
    @Query(value="UPDATE orders SET distributor_id=:distID WHERE order_id=:id",nativeQuery = true)
    int updateDistributor(long id, long distID);

    @Query("SELECT new com.cargon.backend.application.DTO.OrderProductdto(u.order_id, p.product_id, p.quantity, p.batch_id) FROM Order AS u LEFT JOIN orderProduct AS p ON u.order_id = p.order_id")
    public List<OrderProductdto> orderJoinsProducts();




}
