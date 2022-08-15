package com.cargon.backend.application.Interface;


import com.cargon.backend.application.Entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface StatusRepository extends JpaRepository<Status,Long> {
    @Query(value = "SELECT * FROM  status ",nativeQuery = true)
    List<Status> getAllStatus();
    @Query(value = "SELECT * FROM  Status WHERE order_id= :order_id",nativeQuery = true)
    List<Status> searchOrderByID(long order_id);

}
