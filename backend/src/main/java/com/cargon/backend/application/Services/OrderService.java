package com.cargon.backend.application.Services;

import com.cargon.backend.application.DTO.OrderProductdto;

import com.cargon.backend.application.Interface.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import com.cargon.backend.application.Entity.Order;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class OrderService {
    @Autowired
    OrderRepository orderRepo;

    @RequestMapping(value="/orders",method= RequestMethod.GET)
    public List<Order> Orders(){
        return orderRepo.getAllOrders();
    }

    @RequestMapping(value="/ordercount",method= RequestMethod.GET)
    long OrderCount(){
        return orderRepo.getOrderCount();
    }

    @RequestMapping(value="/order/{orderId}",method= RequestMethod.GET)
    public Order OrderById(@PathVariable("orderId") long orderId){
        return orderRepo.getOrderByID(orderId);
    }

    @RequestMapping(value="/orders/distributor/{distributorId}",method= RequestMethod.GET)
    public List<Order> OrderByDistributor(@PathVariable("distributorId") long distributorId){
        return orderRepo.getAllOrderByDistributor(distributorId);
    }
    @RequestMapping(value="/orders/wholesaler/{wholesalerId}",method= RequestMethod.GET)
    public List<Order> OrderByWholesaler(@PathVariable("wholesalerId") long wholesalerId){
        return orderRepo.getAllOrderByWholesaler(wholesalerId);
    }
    @RequestMapping(value="/orders/factory/{id}",method= RequestMethod.GET)
    public List<Object> OrderByFactory(@PathVariable("id") long id){
        return orderRepo.getAllOrderByFactory(id);
    }

    @RequestMapping(value="/order",method= RequestMethod.POST)
    public Order OrderByWholesaler(@RequestBody Order ordr){
        return orderRepo.saveAndFlush(ordr);

    }
    @RequestMapping(value="/order/distributor/{ordr_id}/{dist_id}",method= RequestMethod.PUT)
    public int OrderByWholesaler(@PathVariable("ordr_id") long id, @PathVariable("dist_id") long distID){
        orderRepo.updateDistributor(id,distID);
        return 1;
    }
    @RequestMapping(value="/allorders",method= RequestMethod.GET)
    public List<OrderProductdto> allorders(){
        return orderRepo.orderJoinsProducts();
    }


}
