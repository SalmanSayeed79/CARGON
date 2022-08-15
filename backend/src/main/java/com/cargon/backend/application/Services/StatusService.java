package com.cargon.backend.application.Services;


import com.cargon.backend.application.Entity.Status;
import com.cargon.backend.application.Interface.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class StatusService {
    @Autowired
    StatusRepository statusRepo;



    @RequestMapping(value="/status/{orderId}",method= RequestMethod.GET)
    public List<Status> getStatusByorderID(@PathVariable("orderId") long orderId){
        System.out.println(orderId);
        return statusRepo.searchOrderByID(orderId);
    }


    @RequestMapping(value="/status/updateStatus",method= RequestMethod.POST)
    public Status addStatusByOrderID(@RequestBody Status stat){
        statusRepo.saveAndFlush(stat);
        System.out.println(stat);
        return stat;
    }





}
