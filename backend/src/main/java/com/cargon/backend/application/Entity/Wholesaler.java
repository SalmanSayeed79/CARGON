package com.cargon.backend.application.Entity;

import javax.persistence.*;

@Entity
@Table(name="wholesaler")
public class Wholesaler {




    @Id
    @GeneratedValue
    private long wholesaler_id;

    @Column(name="name")
    private String name;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column(name="address")
    private String address;

    @Column(name="region")
    private String region;

    @Column(name="lat")
    private String lat;
    @Column(name="lng")
    private String lng;

    @Column(name="image")
    private String image;

    @Column(name="email")
    private String email;

    public Wholesaler( String name, String phoneNumber, String address, String region, String lat, String lng, String image, String email) {
        this.wholesaler_id = wholesaler_id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.region = region;
        this.lat = lat;
        this.lng = lng;
        this.image = image;
        this.email = email;
    }


    public long getWholesaler_id() {
        return wholesaler_id;
    }

    public void setWholesaler_id(long wholesaler_id) {
        this.wholesaler_id = wholesaler_id;
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

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }



    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Wholesaler() {
    }
    @Override
    public String toString() {
        return "Wholesaler{" +
                "wholesaler_id=" + wholesaler_id +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", region='" + region + '\'' +
                ", image='" + image + '\'' +
                ", email='" + email + '\'' +
                '}';
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
}
