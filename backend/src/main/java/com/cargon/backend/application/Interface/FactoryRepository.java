package com.cargon.backend.application.Interface;

import com.cargon.backend.application.Entity.Factory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface FactoryRepository extends JpaRepository<Factory,Long> {
    @Query(value="SELECT factory_id from factory WHERE adminstrator_id=:id",nativeQuery = true)
    long getFactoryIDByAdmin(long id);
    @Query(value="SELECT * from factory WHERE factory_id=:id",nativeQuery = true)
    Factory getFactory(long id);
    @Query(value="SELECT * from factory",nativeQuery = true)
    List<Factory> getAllFactory();

}
