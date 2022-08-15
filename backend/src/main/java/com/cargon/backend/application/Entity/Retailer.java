package com.cargon.backend.application.Entity;

import javax.persistence.*;

@Entity
@Table(name="retailer")
public class Retailer {




    @Id
    @GeneratedValue
    private long retailer_id;

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

    public Retailer(String name, String phoneNumber, String address, String image, String region, String lat, String lng) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.image = image;
        this.region = region;
        this.lat = lat;
        this.lng = lng;
    }


    public long getRetailer_id() {
        return retailer_id;
    }

    public void setRetailer_id(long retailer_id) {
        this.retailer_id = retailer_id;
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


    public Retailer() {
    }
    @Override
    public String toString() {
        return "Retailer{" +
                "retailer_id=" + retailer_id +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", address='" + address + '\'' +
                ", image='" + image + '\'' +
                ", region='" + region + '\'' +
                ", location='" + lng + '\'' +
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
