package com.cargon.backend.application.Services;

import com.cargon.backend.application.Entity.Product;
import com.cargon.backend.application.Interface.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*" )
public class ProductService {
    @Autowired
    ProductRepository productRepo;
    //
    //ADDING SOME ENDPOINTS

    @RequestMapping(value="/products",method= RequestMethod.GET)
    public List<Product> Products(){
        List<Product> products=productRepo.getAllProducts();
        return products;
    }
    @RequestMapping(value="/product/{productId}",method= RequestMethod.GET)
    public Optional<Product> ProductById(@PathVariable("productId") long productId){
        Optional<Product> productById=productRepo.getProduct(productId);
        return productById;
    }

    @RequestMapping(value="/product/{factoryId}",method= RequestMethod.POST)
    public void addNewProduct(@RequestBody Product prod) {
        System.out.println(prod);

        productRepo.saveAndFlush(prod);

        //return ResponseStatus.class;
//        productRepo.addNewProduct(prod.getProduct_id(),prod.getName(),prod.getFactoryId(),prod.getVariant(),prod.getIntensity(),prod.getBrand(),prod.getImage(),prod.getCategory(),
//                prod.getChemicalName(),prod.getPrice(),prod.getBestBefore(),prod.getIndications(),prod.getPharmacology(),prod.getDosage(),
//                prod.getAdminstration(),prod.getInteraction(),prod.getSide_effects(),prod.getPrecautions(),prod.getStorage());
    }
    /*

    {
    "name":"Xeldrin",
    "variant":"Capsule",
    "intensity":"2 mg ",
    "brand":"lorem",
    "image":"lorem",
    "category":"lorem",
    "chemicalName":"lorem",
    "price":2,
    "bestBefore":"12/03/2023",
    "indications":"lorem",
    "pharmacology":"lorem",
    "dosage":"lorem",
    "adminstration":"lorem",
    "interaction":"lorem",
    "side_effects":"lorem",
    "precautions":"lorem",
    "storage":"lorem"
}

     */

    @RequestMapping(value="/product/name/{searchValue}",method= RequestMethod.GET)
    public List<Product> getByName(@PathVariable("searchValue") String searchValue) {
        return productRepo.getByName(searchValue);
    }
    @RequestMapping(value="/product/factory/{id}",method= RequestMethod.GET)
    public List<Product> getByName(@PathVariable("id") long id) {
        return productRepo.getByFactory(id);
    }

    @RequestMapping(value="/productCount",method= RequestMethod.GET)
    public long getProductCount() {
        return productRepo.getProductCount();
    }

    @RequestMapping(value="/brandCount",method= RequestMethod.GET)
    public long getBrandCount() {
        return productRepo.getBrandCount();
    }

    @RequestMapping(value="/genericCount",method= RequestMethod.GET)
    public long getGenericCount() {
        return productRepo.getGenericsCount();
    }

    @RequestMapping(value="/product/delete/{id}",method= RequestMethod.DELETE)
    public ResponseEntity<?> deleteProduct(@PathVariable("id") long id) {
        //System.out.println(id);
        try{
            //productRepo.deleteById(id);
            productRepo.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        catch (EmptyResultDataAccessException e){
            return ResponseEntity.notFound().build();
        }

       /// return productRepo.getGenericsCount();
    }
    @RequestMapping(value="/product/update/{id}",method= RequestMethod.PUT)
    public int updateProduct(@PathVariable("id") long id,@RequestBody Product prod) {
        //System.out.println(prod.getName());
        try{
            System.out.println(prod.getProduct_id());
            //productRepo.deleteById(id);
            productRepo.updateProduct(
                    id,
                    prod.getName(),
                    prod.getFactoryId(),
                    prod.getVariant(),
                    prod.getIntensity(),
                    prod.getBrand(),
                    prod.getImage(),
                    prod.getCategory(),
                    prod.getChemicalName(),
                    prod.getPrice(),
                    prod.getBestBefore(),
                    prod.getIndications(),
                    prod.getPharmacology(),
                    prod.getDosage(),
                    prod.getAdminstration(),
                    prod.getInteraction(),
                    prod.getSide_effects(),
                    prod.getPrecautions(),
                    prod.getStorage()
            );
            //productRepo.saveAndFlush(prod);
            return 1;
        }
        catch (EmptyResultDataAccessException e){
            return 0;
        }

        /// return productRepo.getGenericsCount();
    }

    @RequestMapping(value="/product/query",method= RequestMethod.GET)
    public List<Product> getByName(@RequestBody Product product) {
        long Qproduct_id=product.getProduct_id();
        String name=product.getName();
        String variant=product.getVariant();
        String intensity=product.getIntensity();
        String category=product.getCategory();
        String chemicalName=product.getChemicalName();
        long factoryId=product.getFactoryId();
        String brand=product.getBrand();
        double price=product.getPrice();
        System.out.println(product);
        return productRepo.getQueryProducts(Qproduct_id,name,brand,variant,intensity,factoryId,category,chemicalName,price);
    }

}


