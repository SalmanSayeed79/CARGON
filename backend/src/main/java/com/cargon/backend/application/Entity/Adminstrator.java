package com.cargon.backend.application.Entity;

import javax.persistence.*;

@Entity
@Table(name="adminstrator")
public class Adminstrator {
    @Id
    @GeneratedValue
    private long adminstrator_id;

    @Column(name="name")
    private String name;

    @Column(name="experience")
    private long experience;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column(name="address")
    private String address;

    @Column(name="image")
    private String image;

    @Column(name="email",unique = true,nullable = false)
    private String email;

    public Adminstrator(long adminstrator_id, String name, long experience, String phoneNumber, String address, String image, String email) {
        this.adminstrator_id = adminstrator_id;
        this.name = name;
        this.experience = experience;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.image = image;
        this.email = email;
    }

    public void setAdminstrator_id(long adminstrator_id) {
        this.adminstrator_id = adminstrator_id;
    }

    public void setExperience(long experience) {
        this.experience = experience;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getAdminstrator_id() {
        return adminstrator_id;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getExperience() {
        return experience;
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




    public Adminstrator() {
    }


}
