package com.cargon.backend.application.Services;

import com.cargon.backend.application.Entity.Retailer;
import com.cargon.backend.application.Interface.RetailerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class RetailerService {
    @Autowired
    RetailerRepository retailerRepo;
    //
    //ADDING SOME ENDPOINTS

    @RequestMapping(value="/retailers",method= RequestMethod.GET)
    public List<Retailer> Retailers(){
        Retailer retailer=new Retailer("Salman","01234121","Dhanmondi,Dhaka","image","Dhaka","23.7461", "90.3742");
        retailerRepo.saveAndFlush(retailer);

        List<Retailer> retailers=retailerRepo.findAll();
        retailers.forEach(a-> {
            //ans=ans+a.toString();
            System.out.println(a.toString());
        });
        //System.out.println(adminRepo.findAll().stream().toString());
        return retailers;
    }
    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/retailer/{retailerId}",method= RequestMethod.GET)
    public Optional<Retailer> RetailerById(@PathVariable("retailerId") long retailerId){
        Retailer retailer=new Retailer("Salman","01234121","Dhanmondi,Dhaka","image","Dhaka","23.7461", "90.3742");
        retailerRepo.saveAndFlush(retailer);
        Optional<Retailer> retailerById=retailerRepo.findById(retailerId);

        //System.out.println(retailerRepo.findAll().stream().toString());
        return retailerById;
    }
}