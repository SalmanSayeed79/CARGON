package com.cargon.backend.application.Interface;


import com.cargon.backend.application.Entity.Batch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface BatchRepository extends JpaRepository<Batch,Long> {

    @Modifying
    @Transactional
    @Query(value="INSERT INTO batch(product_id,initial_quantity,current_quantity,expiry_date,production_date) VALUES (:product_id,:initial_quantity,:current_quantity,:expiry_date,:production_date)" ,nativeQuery = true)
    void addBatch(long product_id, long initial_quantity, long current_quantity, Date expiry_date,Date production_date);

    @Query(value="SELECT * FROM batch ORDER BY batch.production_date",nativeQuery = true)
    List<Batch> getAllBatches();

    @Query(value="SELECT batch.batch_id,batch.production_date, batch.current_quantity,batch.initial_quantity,batch.product_id,batch.expiry_date FROM batch LEFT JOIN product ON batch.product_id=product.product_id WHERE product.factory_id=:id ORDER BY batch.production_date",nativeQuery = true)
    List<Batch> getAllBatchesByFactory(long id);

    @Query(value="SELECT * FROM batch WHERE product_id=:prod_id",nativeQuery = true)
    List<Batch> getByProdId(long prod_id);

    @Query(value="SELECT SUM(current_quantity) FROM batch WHERE product_id=:prod_id",nativeQuery = true)
    long getQuantityByProd(long prod_id);

    @Query(value="SELECT * FROM batch WHERE batch_id= :id",nativeQuery = true)
    Batch getBatch(long id);

    @Query(value="SELECT COUNT(*) FROM batch ",nativeQuery = true)
    long getBatchCount();

    @Query(value="SELECT SUM(current_quantity) FROM batch ",nativeQuery = true)
    long getInventoryCount();

    @Query(value="SELECT SUM(*) FROM batch WHERE production_date=:date",nativeQuery = true)
    long getProductionToday(Date date);

   // @Query(value="SELECT batch_id,batch.current_quantity,batch.initial_quantity,batch.production_date,batch.expiry_date,price,name,image,brand,batch.product_id,chemical_name,intensity,variant FROM batch LEFT JOIN product ON batch.product_id=product.product_id ORDER BY batch.production_date GROUP BY batch.product_id",nativeQuery = true)
    @Query(value="SELECT product_id AS product_id,SUM(current_quantity) AS current_quantity,SUM(initial_quantity) AS initial_quantity  FROM batch GROUP BY product_id",nativeQuery = true)
    List<Map> getByProduct();

    @Query(value="SELECT batch.product_id AS product_id,SUM(batch.current_quantity) AS current_quantity,SUM(batch.initial_quantity) AS initial_quantity  FROM batch LEFT JOIN product ON batch.product_id=product.product_id WHERE product.factory_id=:id GROUP BY batch.product_id",nativeQuery = true)
    List<Map> getByProductAndFactory(long id);
    @Transactional
    @Modifying
    @Query(value="UPDATE batch SET current_quantity=current_quantity - :sell WHERE batch_id=:id",nativeQuery = true)
    int updateQuantity(long id,long sell);

}
