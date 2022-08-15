package com.cargon.backend.application.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="batch")
public class Batch {
    @Id
    @GeneratedValue
    private long batch_id;
    @Column(name="product_id")
    private long product_id;

    @Column(name="production_date")
    private Date production_date;

    @Column(name="expiry_date")
    private Date expiry_date;

    @Column(name="initial_quantity")
    private long initial_quantity;

    @Column(name="current_quantity")
    private long current_quantity;

    public Batch() {

    }

    public void setBatch_id(long batch_id) {
        this.batch_id = batch_id;
    }


    public long getBatch_id() {
        return batch_id;
    }

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public Date getProduction_date() {
        return production_date;
    }

    public void setProduction_date(Date production_date) {
        this.production_date = production_date;
    }

    public Date getExpiry_date() {
        return expiry_date;
    }

    public void setExpiry_date(Date expiry_date) {
        this.expiry_date = expiry_date;
    }

    public long getInitial_quantity() {
        return initial_quantity;
    }

    public void setInitial_quantity(long initial_quantity) {
        this.initial_quantity = initial_quantity;
    }

    public long getCurrent_quantity() {
        return current_quantity;
    }

    public void setCurrent_quantity(long current_quantity) {
        this.current_quantity = current_quantity;
    }

    public Batch(long product_id, Date production_date, Date expiry_date, long initial_quantity, long current_quantity) {
        this.product_id = product_id;
        this.production_date = production_date;
        this.expiry_date = expiry_date;
        this.initial_quantity = initial_quantity;
        this.current_quantity = current_quantity;
    }
}
