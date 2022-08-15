package com.cargon.backend.application.Interface;

import com.cargon.backend.application.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;

// WE need to implement the JpaRepository interface
// This lets us use the built-in CRUD operations
public interface ProductRepository extends JpaRepository<Product,Long> {
    @Modifying
    @Transactional
    @Query(value = "INSERT INTO product(product_id,name,factory_id,variant,intensity,brand,image,category,chemical_name,price,best_before,indications,pharmacology,dosage,adminstration,interaction,side_effects,precautions,storage) values(:id,:name,:factory_id,:variant,:intensity,:brand,:image,:category,:chemicalName,:price,:bestBefore,:indications,:pharmacology,:dosage,:adminstration,:interaction,:side_effects,:precautions,:storage)",nativeQuery = true)
    void addNewProduct(long id, String name,long factory_id,String variant,  String intensity, String brand, String image,  String category, String chemicalName,
                       double price,  Date bestBefore, String indications, String pharmacology, String dosage, String adminstration,  String interaction,
                        String side_effects,  String precautions,  String storage);

    @Query(value="SELECT * FROM product ORDER BY name",nativeQuery = true)
    List<Product> getAllProducts();
    @Query(value="SELECT COUNT(*) FROM product",nativeQuery = true)
    long getProductCount();
    @Query(value="SELECT COUNT(DISTINCT chemical_name) FROM product",nativeQuery = true)
    long getGenericsCount();
    @Query(value="SELECT COUNT(DISTINCT brand) FROM product",nativeQuery = true)
    long getBrandCount();

    @Query(value="SELECT * FROM product WHERE name LIKE :searchValue% ",nativeQuery = true)
    List<Product> getByName( String searchValue);

    @Query(value="SELECT * FROM product WHERE factory_id=:id ",nativeQuery = true)
    List<Product> getByFactory( long id);

    //BOTH ARE ALLOWED
    //name = :name , factory_id= :factory_id , variant=:variant, intensity= :intensity, brand= :brand, image = :image, category = :category, chemical_name= :chemicalName, price = :price, best_before = :bestBefore, indications = :indications, pharmacology= :pharmacology,dosage= :dosage, adminstration = :adminstration, interaction = :interaction, side_effects=:side_effects, precautions=:precautions, storage=:storage)
    //name = ?2, factory_id= ?3, variant= ?4, intensity= ?5, brand= ?6, image = ?7, category = ?8, chemical_name= ?9, price = ?10, best_before = ?11, indications = ?12, pharmacology= ?13,  dosage= ?14, adminstration = ?15, interaction = ?16, side_effects= ?17, precautions= ?18, storage= ?19

    //UPDATE AND DELETE NEED @Transactional AND @Modifying
    @Transactional
    @Modifying
    @Query(value="UPDATE product SET name = ?2, factory_id= ?3, variant= ?4, intensity= ?5, brand= ?6, image = ?7, category = ?8, chemical_name= ?9, price = ?10, best_before = ?11, indications = ?12, pharmacology= ?13,  dosage= ?14, adminstration = ?15, interaction = ?16, side_effects= ?17, precautions= ?18, storage= ?19 WHERE product_id= ?1",nativeQuery = true)
    int updateProduct(long id, String name,long factory_id,String variant,  String intensity, String brand, String image,  String category, String chemicalName,
                       double price,  Date bestBefore, String indications, String pharmacology, String dosage, String adminstration,  String interaction,
                       String side_effects,  String precautions,  String storage);

    @Transactional
    @Modifying
    @Query(value="DELETE FROM product WHERE product_id= ?1",nativeQuery = true)
    long deleteProduct(long id);

    @Query(value="SELECT * FROM product WHERE product_id= ?1",nativeQuery = true)
    Optional<Product> getProduct(long id);

    /*
    CREATE PROCEDURE
            (@Product int = NULL, @OrderID int = NULL, @TransactionType char(1) = NULL, @Qty int = NULL)
    AS
    SELECT ProductID, ReferenceOrderID, TransactionType, Quantity,
    TransactionDate, ActualCost from Production.TransactionHistory
    WHERE (ProductID = @Product Or @Product IS NULL)
    AND (ReferenceOrderID = @OrderID OR @OrderID Is NULL)
    AND (TransactionType = @TransactionType OR @TransactionType Is NULL)
    AND (Quantity = @Qty Or @Qty is null)
    GO
    */
//
    @Query(value = "SELECT * FROM Product WHERE (:Qproduct_id=0 OR product_id=:Qproduct_id) AND (:Qname is null OR name = :Qname)AND(:variant is null OR variant=:variant) AND   (:Qbrand is NULL OR brand = :Qbrand) AND (:Qintensity IS NULL OR intensity = :Qintensity) AND (:QfactoryId=0 OR factory_id = :QfactoryId) AND (:Qcategory IS NULL OR category = :Qcategory) AND (:QchemicalName IS NULL OR chemical_name = :QchemicalName) AND (:Qprice=0x OR price = :Qprice)", nativeQuery = true)
    List<Product>getQueryProducts(long Qproduct_id, String Qname, String Qbrand,String variant, String Qintensity, long QfactoryId, String Qcategory, String QchemicalName, double Qprice);

    //@Proce
//    @Query(value = "SELECT * FROM Product WHERE (:brand IS NULL OR brand=:brand)", nativeQuery = true)
//
//    List<Product>getQueryProducts(String brand);

}
