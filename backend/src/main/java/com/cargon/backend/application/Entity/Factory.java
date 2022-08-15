package com.cargon.backend.application.Entity;

import javax.persistence.*;

@Entity
@Table(name="factory")
public class Factory {

    @Id
    @GeneratedValue
    private long factory_id;

    @Column(name="adminstrator_id")
    private long adminstrator_id;

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
    @Column(name="name")
    private String name;
    @Column(name="details")
    private String details;



    public Factory() {

    }

    public Factory(long factory_id, long adminstrator_id, String address, String region, String lat, String lng, String image, String name, String details) {
        this.factory_id = factory_id;
        this.adminstrator_id = adminstrator_id;
        this.address = address;
        this.region = region;
        this.lat = lat;
        this.lng = lng;
        this.image = image;
        this.name = name;
        this.details = details;
    }

    public long getFactory_id() {
        return factory_id;
    }

    public void setFactory_id(long factory_id) {
        this.factory_id = factory_id;
    }

    public long getAdmistrator_id() {
        return adminstrator_id;
    }

    public void setAdminstrator_id(long adminstrator_id) {
        this.adminstrator_id = adminstrator_id;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Factory{" +
                "factory_id=" + factory_id +
                ", adminstrator_id=" + adminstrator_id +
                ", address='" + address + '\'' +
                ", region='" + region + '\'' +
                ", lat='" + lat + '\'' +
                ", lng='" + lng + '\'' +
                ", image='" + image + '\'' +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
