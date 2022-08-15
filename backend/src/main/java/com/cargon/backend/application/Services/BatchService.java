package com.cargon.backend.application.Services;

import com.cargon.backend.application.Interface.BatchRepository;
import com.cargon.backend.application.Entity.Batch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*" )
public class BatchService {
    @Autowired
    BatchRepository batchRepo;

    @RequestMapping(value="/batches",method=RequestMethod.GET)
    List<Batch> getAllBatch(){
        List<Batch> batches=batchRepo.getAllBatches();
        return batches;
    }
    @RequestMapping(value="/batches/factory/{id}",method=RequestMethod.GET)
    List<Batch> getAllBatchFactory(@PathVariable("id") long id){
        List<Batch> batches=batchRepo.getAllBatchesByFactory(id);
        return batches;
    }
    @RequestMapping(value="/inventories",method=RequestMethod.GET)
    List<Map> getByProduct(){
        List<Map> batches=batchRepo.getByProduct();
        return batches;
    }
    @RequestMapping(value="/inventories/factory/{id}",method=RequestMethod.GET)
    List<Map> getByProduct(@PathVariable("id")long id){
        List<Map> batches=batchRepo.getByProductAndFactory(id);
        return batches;
    }
    @RequestMapping(value="/batch/{id}",method=RequestMethod.GET)
    Batch getBatch(@PathVariable("id") long id){
        return batchRepo.getBatch(id);
    }

    @RequestMapping(value="/batch/prod/{prod_id}",method=RequestMethod.GET)
    List<Batch> getByProdId(@PathVariable("prod_id") long prod_id){
        return batchRepo.getByProdId(prod_id);
    }

    @RequestMapping(value="/batch/prod_quantity/{prod_id}",method=RequestMethod.GET)
    long getQuantityByProd(@PathVariable("prod_id") long prod_id){
        return batchRepo.getQuantityByProd(prod_id);
    }

    @RequestMapping(value="/batchCount",method=RequestMethod.GET)
    long getBatchCount(){
        return batchRepo.getBatchCount();
    }
    @RequestMapping(value="/inventoryCount",method=RequestMethod.GET)
    long getInventoryCount(){
        return batchRepo.getInventoryCount();
    }
    @RequestMapping(value="/productionCount/{date}",method=RequestMethod.GET)
    long getQuantityByProd(@PathVariable("date") Date date){
        return batchRepo.getProductionToday(date);
    }

    @RequestMapping(value="batch/create",method=RequestMethod.POST)
    void addBatch(@RequestBody Batch bat){
        batchRepo.saveAndFlush(bat);
//        batchRepo.addBatch(
//                bat.getProduct_id(),
//                bat.getInitial_quantity(),
//                bat.getCurrent_quantity(),
//                bat.getExpiry_date(),
//                bat.getProduction_date()
//        );

    }
    @RequestMapping(value="batch/update/{id}/{sell}",method=RequestMethod.PUT)
    int updateQuantity(@PathVariable("id")long id,@PathVariable("sell") long sell){
        batchRepo.updateQuantity(id,sell);
        return 1;
    }
}
