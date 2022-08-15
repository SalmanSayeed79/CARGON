package com.cargon.backend.application.Interface;


import com.cargon.backend.application.DTO.OrderProductdto;
import com.cargon.backend.application.Entity.orderProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface orderProductRepository extends JpaRepository<orderProduct,Long> {



    @Query(value="SELECT o.order_id, p.product_id, p.quantity, p.batch_id, o.wholesaler_id FROM orders AS o LEFT JOIN orderProduct AS p ON o.order_id = p.order_id",nativeQuery = true)
    public List<Map> orderJoinsProducts();

    @Query(value = "SELECT op.batch_id,op.order_id,op.quantity,op.orderproduct_id,op.product_id, p.name,p.intensity,p.price,p.chemical_name,(p.price*op.quantity) AS totalPrice FROM orderproduct op LEFT JOIN product p ON p.product_id=op.product_id  WHERE order_id=:id",nativeQuery = true)
    public List<Map> orderByID(long id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE orderproduct SET batch_id=:batID WHERE orderproduct_id=:id",nativeQuery = true)
    public int UpdateBatchID(long id,long batID);


}
