package com.cargon.backend.application.Interface;



import com.cargon.backend.application.Entity.Wholesaler;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface WholesaleRepository extends JpaRepository<Wholesaler,Long> {
    @Query(value="SELECT * FROM wholesaler",nativeQuery = true)
    List<Wholesaler> getAllWholeSaler();
    @Query(value="SELECT * FROM wholesaler WHERE wholesaler_id=:id",nativeQuery = true)
    Wholesaler getWholesaler(long id);
    @Query(value="SELECT * FROM wholesaler WHERE email=:email",nativeQuery = true)
    Wholesaler getWholeSalerByEmail(String email);

    @Transactional
    @Modifying
    @Query(value="UPDATE wholesaler SET name = ?2, phone_number= ?3, address= ?4, region= ?5, lat= ?6, lng = ?7, image = ?8,email = ?9 WHERE distributor_id= ?1",nativeQuery = true)
    int updateDistributor(long id, String name, String phone_number, String address,String region, String lat, String lng, String image,String email);
}
