package com.cargon.backend.application.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="bulk_order")
public class  Bulk_Order{

    @Id
    @GeneratedValue
    private long bulk_order_id;

    @Column(name="product_id")
    private long product_id;

    @Column(name="image")
    private String image;

    @Column(name="delivery_start_date")
    private Date delivery_start_date;

    @Column(name="delivered_to")
    private String delivered_to;

    @Column(name="status")
    private String status;

    @Column(name="wholesaler_id")
    private long wholesaler_id;

    @Column(name="weight")
    private long weight;

    @Column(name="dimensions")
    private String size;


    public Bulk_Order(long product_id, String image, Date delivery_start_date, String delivered_to, String status, long wholesaler_id, long weight, String size) {
        this.product_id = product_id;
        this.image = image;
        this.delivery_start_date = delivery_start_date;
        this.delivered_to = delivered_to;
        this.status = status;
        this.wholesaler_id = wholesaler_id;
        this.weight = weight;
        this.size = size;
    }

    public Bulk_Order() {

    }

    public long getBulk_order_id() {
        return bulk_order_id;
    }

    public void setBulk_order_id(long bulk_order_id) {
        this.bulk_order_id = bulk_order_id;
    }

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public long getWholesaler_id() {
        return wholesaler_id;
    }

    public void setWholesaler_id(long wholesaler_id) {
        this.wholesaler_id = wholesaler_id;
    }

    public long getWeight() {
        return weight;
    }

    public void setWeight(long weight) {
        this.weight = weight;
    }

    public String getSize() {
        return size;
    }

    public String setSize(String size) {
        return this.size = size;
    }

    @Override
    public String toString() {
        return "Order{" +
                "Bulk_Order_id=" + bulk_order_id +
                ", product_id='" + product_id + '\'' +
                ", delivery_start_date='" + delivery_start_date + '\'' +
                ", delivered_to='" + delivered_to + '\'' +
                ", status='" + status + '\'' +
                ", weight='" + weight + '\'' +
                ", size=" + size +
                ", wholesaler_id=" + wholesaler_id +
                ", image=" + image +
                '}';
    }
}
