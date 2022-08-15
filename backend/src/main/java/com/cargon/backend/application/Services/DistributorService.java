package com.cargon.backend.application.Services;

import com.cargon.backend.application.Entity.Adminstrator;
import com.cargon.backend.application.Entity.Distributor;
import com.cargon.backend.application.Interface.DistributorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class DistributorService {
    @Autowired
    DistributorRepository distributorRepo;
    //
    //ADDING SOME ENDPOINTS

    @RequestMapping(value="/distributors",method= RequestMethod.GET)
    public List<Distributor> Distributors(){
        return distributorRepo.getAllDistributor();
    }

    @RequestMapping(value="/distributor/{distributorId}",method= RequestMethod.GET)
    public Distributor DistributorById(@PathVariable("distributorId") long distributorId){
        return distributorRepo.getDistributor(distributorId);
    }
    @RequestMapping(value="/distributor/email/{email}",method= RequestMethod.GET)
    public Distributor DistributorByEmail(@PathVariable("email") String email){
        return distributorRepo.getDistributorByEmail(email);
    }
    @RequestMapping(value="/distributor",method= RequestMethod.POST)
    public Distributor addDistributor(@RequestBody Distributor dist){
       return distributorRepo.saveAndFlush(dist);
    }
    @RequestMapping(value="/distributor/{id}",method= RequestMethod.PUT)
    public Distributor addDistributor(@PathVariable("id") long id,@RequestBody Distributor dist){

        distributorRepo.updateDistributor(
                id,
                dist.getName(),
                dist.getPhoneNumber(),
                dist.getRegion(),
                dist.getAddress()
        );

        return dist;
    }
}
