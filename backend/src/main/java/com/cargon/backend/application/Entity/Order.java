package com.cargon.backend.application.Entity;

import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue
    private long order_id;


    @OneToMany(targetEntity = orderProduct.class, mappedBy = "order_id", orphanRemoval = false, fetch = FetchType.LAZY)
    private List<Product> products;

    @Column(name="delivery_start_date")
    private Date delivery_start_date;

    @Column(name="delivered_to")
    private String delivered_to;

    @Column(name="distributor_id")
    private long distributor_id;

    @Column(name="is_wholesaler")
    private boolean is_wholesaler;

    @Column(name="wholesaler_id")
    private long wholesaler_id;

//    @Column(name="order_placement")
//    private Date order_placement;

//    @Column(name="order_price")
//    private double order_price;

    public Order(long product_id, Date delivery_start_date,
                 String delivered_to,  long rider_id, long weight, long size, boolean is_wholesaler,
                    long wholesaler_id, Date order_placement, double order_price) {

        this.delivery_start_date = delivery_start_date;
        this.delivered_to = delivered_to;
        this.distributor_id = rider_id;

        this.is_wholesaler = is_wholesaler;
        this.wholesaler_id = wholesaler_id;
        //this.order_placement = order_placement;

    }

    public Order() {

    }

    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(long order_id) {
        this.order_id = order_id;
    }



    public Date getDelivery_start_date() {
        return delivery_start_date;
    }

    public void setDelivery_start_date(Date delivery_start_date) {
        this.delivery_start_date = delivery_start_date;
    }

    public String getDelivered_to() {
        return delivered_to;
    }

    public void setDelivered_to(String delivered_to) {
        this.delivered_to = delivered_to;
    }

    public long getRider_id() {
        return distributor_id;
    }

    public void setRider_id(long rider_id) {
        this.distributor_id = rider_id;
    }



    public boolean isIs_wholesaler() {
        return is_wholesaler;
    }

    public void setIs_wholesaler(boolean is_wholesaler) {
        this.is_wholesaler = is_wholesaler;
    }

    @Override
    public String toString() {
        return "Order{" +
                "Order_id=" + order_id +

                ", delivery_start_date='" + delivery_start_date + '\'' +
                ", delivered_to='" + delivered_to + '\'' +

                ", rider_id=" + distributor_id +
                ", is_wholesaler=" + is_wholesaler +
                '}';
    }



}
