package com.cargon.backend.application.Entity;

import org.springframework.lang.NonNull;

import javax.persistence.*;
import java.util.Date;

@Entity

@Table(name="status")
public class Status {
    @Id
    @GeneratedValue
    long stat_id;

    @Column(name="order_id")
    long order_id;

    @Column(name="name")
    String name;

    @Column(name="time")
    Date time;

    public Status(){
    }
    public Status(long orderId, String name, Date time) {
        this.order_id = orderId;
        this.name = name;
        this.time = time;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_Id(long order_id) {
        this.order_id = order_id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
