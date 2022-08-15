package com.cargon.backend.application.Services;

import com.cargon.backend.application.Entity.Wholesaler;
import com.cargon.backend.application.Interface.WholesaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class WholesalerService {
    @Autowired
    WholesaleRepository wholesaleRepo;

    @RequestMapping(value="/wholesalers",method= RequestMethod.GET)
    public List<Wholesaler> Wholesalers(){
        return wholesaleRepo.getAllWholeSaler();
    }

    @RequestMapping(value="/wholesaler/{wholesalerId}",method= RequestMethod.GET)
    public Wholesaler WholesalerById(@PathVariable("wholesalerId") long wholesalerID){
        return wholesaleRepo.getWholesaler(wholesalerID);
    }
    @RequestMapping(value="/wholesaler/email/{email}",method= RequestMethod.GET)
    public Wholesaler WholesalerByEmail(@PathVariable("email") String email){
        return wholesaleRepo.getWholeSalerByEmail(email);
    }
    @RequestMapping(value="/wholesaler",method= RequestMethod.POST)
    public Wholesaler addWholesaler(@RequestBody Wholesaler wholesaler){
        return wholesaleRepo.saveAndFlush(wholesaler);
    }
    @RequestMapping(value="/wholesaler/{id}",method= RequestMethod.PUT)
    public Wholesaler addWholesaler(@PathVariable("id") long id,@RequestBody Wholesaler wholesaler){

        wholesaleRepo.updateDistributor(
                id,
                wholesaler.getName(),
                wholesaler.getPhoneNumber(),
                wholesaler.getAddress(),
                wholesaler.getRegion(),
                wholesaler.getLat(),
                wholesaler.getLng(),
                wholesaler.getImage(),
                wholesaler.getEmail()
        );

        return wholesaler;
    }
}
