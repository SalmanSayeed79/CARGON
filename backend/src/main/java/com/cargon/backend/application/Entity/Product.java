package com.cargon.backend.application.Entity;

import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long product_id;

    @Column(name="name")
    private String name;

    @Column(name="image")
    private String image;

    @Column(name="variant")
    private String variant;

    @Column(name="brand")
    private String brand;

    @Column(name="intensity")
    private String intensity;

    @Column(name="factory_id")
    private long factoryId;

    @Column(name="category")
    private String category;

    @Column(name="chemical_name")
    private String chemicalName;

    @Column(name="price")
    private double price;

    @Column(name="manufacture_date")
    private Date manufactureDate;

    @Column(name="best_before")
    private Date bestBefore;

    @Column(name="indications")
    private String indications;

    @Column(name="pharmacology")
    private String pharmacology;

    @Column(name="dosage")
    private String dosage;

    @Column(name="adminstration")
    private String adminstration;

    @Column(name="interaction")
    private String interaction;

    @Column(name="side_effects")
    private String side_effects;

    @Column(name="precautions")
    private String precautions;

    @Column(name="storage")
    private String storage;

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public long getFactoryId() {
        return factoryId;
    }

    public void setFactoryId(long factoryId) {
        this.factoryId = factoryId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getChemicalName() {
        return chemicalName;
    }

    public void setChemicalName(String chemicalName) {
        this.chemicalName = chemicalName;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getManufactureDate() {
        return manufactureDate;
    }

    public void setManufactureDate(Date manufactureDate) {
        this.manufactureDate = manufactureDate;
    }

    public Date getBestBefore() {
        return bestBefore;
    }

    public void setBestBefore(Date bestBefore) {
        this.bestBefore = bestBefore;
    }

    public String getIndications() {
        return indications;
    }

    public void setIndications(String indications) {
        this.indications = indications;
    }

    public String getPharmacology() {
        return pharmacology;
    }

    public void setPharmacology(String pharmacology) {
        this.pharmacology = pharmacology;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getAdminstration() {
        return adminstration;
    }

    public void setAdminstration(String adminstration) {
        this.adminstration = adminstration;
    }

    public String getInteraction() {
        return interaction;
    }

    public void setInteraction(String interaction) {
        this.interaction = interaction;
    }

    public String getSide_effects() {
        return side_effects;
    }

    public void setSide_effects(String side_effects) {
        this.side_effects = side_effects;
    }

    public String getPrecautions() {
        return precautions;
    }

    public void setPrecautions(String precautions) {
        this.precautions = precautions;
    }

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }
    public String getVariant() {
        return variant;
    }

    public void setVariant(String variant) {
        this.variant = variant;
    }

    public String getIntensity() {
        return intensity;
    }

    public void setIntensity(String intensity) {
        this.intensity = intensity;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Product(String name, String image, long factoryId, String category, String chemicalName, double price, Date manufactureDate, Date bestBefore, String indications, String pharmacology, String dosage, String adminstration, String interaction, String side_effects, String precautions, String storage) {
        this.name = name;
        this.image = image;
        this.factoryId = factoryId;
        this.category = category;
        this.chemicalName = chemicalName;
        this.price = price;
        this.manufactureDate = manufactureDate;
        this.bestBefore = bestBefore;
        this.indications = indications;
        this.pharmacology = pharmacology;
        this.dosage = dosage;
        this.adminstration = adminstration;
        this.interaction = interaction;
        this.side_effects = side_effects;
        this.precautions = precautions;
        this.storage = storage;
    }

    public Product(){

    }

    @Override
    public String toString() {
        return "Product{" +
                "product_id=" + product_id +
                ", name='" + name + '\'' +
                ", image='" + image + '\'' +
                ", variant='" + variant + '\'' +
                ", brand='" + brand + '\'' +
                ", intensity='" + intensity + '\'' +
                ", factoryId=" + factoryId +
                ", category='" + category + '\'' +
                ", chemicalName='" + chemicalName + '\'' +
                ", price=" + price +
                ", manufactureDate=" + manufactureDate +
                ", bestBefore=" + bestBefore +
                ", indications='" + indications + '\'' +
                ", pharmacology='" + pharmacology + '\'' +
                ", dosage='" + dosage + '\'' +
                ", adminstration='" + adminstration + '\'' +
                ", interaction='" + interaction + '\'' +
                ", side_effects='" + side_effects + '\'' +
                ", precautions='" + precautions + '\'' +
                ", storage='" + storage + '\'' +
                '}';
    }
}
