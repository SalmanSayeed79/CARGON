package com.cargon.backend.application.Interface;


import com.cargon.backend.application.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface CustomerRepository extends JpaRepository<Customer,Long> {

    @Query("SELECT o FROM Customer o WHERE o.customer_id= ?1 ")
    Optional<Customer> searchCustomerByID(long customerId);

    @Query("SELECT o FROM Customer o WHERE o.region= ?1 ")
    List<Customer> searchByRegion(String region);

    @Query("SELECT o FROM Customer o WHERE o.phoneNumber= ?1 ")
    Optional<Customer> searchByPhone(String phoneNumber);

    @Query("SELECT o FROM Customer o WHERE o.email= ?1 ")
    Optional<Customer> searchByEmail(String email);
}
