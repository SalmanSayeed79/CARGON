package com.cargon.backend.application.Interface;


import com.cargon.backend.application.Entity.Adminstrator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface AdminstratorRepository extends JpaRepository<Adminstrator,Long> {
    @Query(value = "SELECT * FROM  Adminstrator a ",nativeQuery = true)
    List<Adminstrator> getAllAdmins();
    @Query(value = "SELECT * FROM  Adminstrator a  WHERE   a.adminstrator_id = ?1",nativeQuery = true)
    Adminstrator searchAdminByID(long adminId);
    @Query(value = "SELECT adminstrator_id FROM  Adminstrator a  WHERE   a.email = :email",nativeQuery = true)
    long getIDbyEmail(String email);

    @Transactional
    @Modifying
    @Query(value="UPDATE adminstrator SET name = :name, phone_number=:phoneNumber, address=:address, experience=:exp  WHERE adminstrator_id= :id",nativeQuery = true)
    int updateAdmin(long id, String name, String phoneNumber, String address, long exp);
}
