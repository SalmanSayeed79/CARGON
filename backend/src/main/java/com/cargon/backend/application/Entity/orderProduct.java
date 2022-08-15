package com.cargon.backend.application.Entity;

import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="orderproduct")
public class orderProduct {

    @Id
    @GeneratedValue
    private long orderproduct_id;


   // @OneToMany(targetEntity = Product.class, mappedBy = "id", orphanRemoval = false, fetch = FetchType.LAZY)
    @Column(name="order_id")
    private long order_id;

    @Column(name="product_id")
    private long product_id;

    @Column(name="quantity")
    private long quantity;

    @Column(name="batch_id")
    private long batch_id;

    public orderProduct() {
    }

    public orderProduct(long orderproduct_id, long order_id, long product_id, long quantity, long batch_id) {
        this.orderproduct_id = orderproduct_id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.batch_id = batch_id;
    }

    public long getOrderproduct_id() {
        return orderproduct_id;
    }

    public void setOrderproduct_id(long orderproduct_id) {
        this.orderproduct_id = orderproduct_id;
    }

    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(long order_id) {
        this.order_id = order_id;
    }

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public long getQuantity() {
        return quantity;
    }

    public void setQuantity(long quantity) {
        this.quantity = quantity;
    }

    public long getBatch_id() {
        return batch_id;
    }

    public void setBatch_id(long batch_id) {
        this.batch_id = batch_id;
    }
}
