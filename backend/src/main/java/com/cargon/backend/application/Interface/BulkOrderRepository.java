package com.cargon.backend.application.Interface;

import com.cargon.backend.application.Entity.Bulk_Order;
import org.springframework.data.jpa.repository.JpaRepository;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface BulkOrderRepository extends JpaRepository<Bulk_Order,Long> {
}
