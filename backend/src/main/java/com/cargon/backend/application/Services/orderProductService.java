package com.cargon.backend.application.Services;


import com.cargon.backend.application.DTO.OrderProductdto;
import com.cargon.backend.application.Entity.orderProduct;
import com.cargon.backend.application.Interface.OrderRepository;
import com.cargon.backend.application.Interface.orderProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class orderProductService{

    @Autowired
    orderProductRepository orderProductRepo;

    @RequestMapping(value="/orderProduct",method= RequestMethod.POST)
    public orderProduct OrderSingleProduct(@RequestBody orderProduct o){
        return orderProductRepo.saveAndFlush(o);

    }
    @RequestMapping(value="/orderProduct/order_id/{id}",method= RequestMethod.GET)
    public List<Map> OrderSingleProduct(@PathVariable("id") long id){
        return orderProductRepo.orderByID(id);

    }
    @RequestMapping(value="/orderProduct/batch_update/{id}/{batID}",method= RequestMethod.PUT)
    public int updateBatch(@PathVariable("id") long id,@PathVariable("batID")long batID){
        orderProductRepo.UpdateBatchID(id,batID);
        return 1;
    }
    @RequestMapping(value="/orderProducts",method= RequestMethod.GET)
    public List<Map> getAllOrderProducts(){
        return orderProductRepo.orderJoinsProducts();

    }



}