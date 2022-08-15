package com.cargon.backend.application.Interface;


import com.cargon.backend.application.Entity.Distributor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface DistributorRepository extends JpaRepository<Distributor,Long> {
    @Query(value="SELECT * FROM distributor",nativeQuery = true)
    List<Distributor> getAllDistributor();
    @Query(value="SELECT * FROM distributor WHERE distributor_id=:id",nativeQuery = true)
    Distributor getDistributor(long id);
    @Query(value="SELECT * FROM distributor WHERE email=:email",nativeQuery = true)
    Distributor getDistributorByEmail(String email);

    @Transactional
    @Modifying
    @Query(value="UPDATE distributor SET name = ?2, phone_number= ?3,region=?4, address= ?5, image= ?5 WHERE distributor_id= ?1",nativeQuery = true)
    int updateDistributor(long id, String name, String phone_number,String region, String address);


}
