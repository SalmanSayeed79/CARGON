package com.cargon.backend.application.Entity;

import javax.persistence.*;

@Entity
@Table(name="customer")
public class Customer {



    @Id
    @GeneratedValue
    private long customer_id;

    @Column(name="name")
    private String name;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column(name="address")
    private String address;

    @Column(name="image")
    private String image;

    @Column(name="region")
    private String region;

    @Column(name="lat")
    private String lat;


    @Column(name="lng")
    private String lng;


    @Column(name="email")
    private String email;

    public Customer(String name, String phoneNumber, String address, String image, String region, String lat, String lng, String email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.image = image;
        this.region = region;
        this.lat = lat;
        this.lng = lng;
        this.email = email;
    }


    public long getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(long customer_id) {
        this.customer_id = customer_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
