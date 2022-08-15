package com.cargon.backend.application.Interface;


import com.cargon.backend.application.Entity.Retailer;
import org.springframework.data.jpa.repository.JpaRepository;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface RetailerRepository extends JpaRepository<Retailer,Long> {
}
