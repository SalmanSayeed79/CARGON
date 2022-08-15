package com.cargon.backend.application.DTO;

import com.cargon.backend.application.Entity.Order;
import com.cargon.backend.application.Entity.orderProduct;

public class OrderProductdto {

    private long order_id;
    private long product_id;
    private long quantity;
    private long batch_id;

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

    public OrderProductdto() {
    }

    public OrderProductdto(long order_id, long product_id, long quantity, long batch_id) {
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.batch_id = batch_id;
    }
}
