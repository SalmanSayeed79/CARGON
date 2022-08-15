package com.cargon.backend.application.Services;

import com.cargon.backend.application.Entity.Factory;
import com.cargon.backend.application.Interface.FactoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class FactoryService {
    @Autowired
    FactoryRepository factoryRepo;

    @RequestMapping(value="/factories",method= RequestMethod.GET)
    public List<Factory> Factories(){
        return factoryRepo.getAllFactory();
    }

    @RequestMapping(value="/factory/{factoryId}",method= RequestMethod.GET)
    public Factory FactoryById(@PathVariable("factoryId") long factoryId){
        return factoryRepo.getFactory(factoryId);
    }
    @RequestMapping(value="/factory",method= RequestMethod.POST)
    public Factory addFactory(@RequestBody Factory newFactory){
        Factory ret = factoryRepo.saveAndFlush(newFactory);
        return ret;
    }
    @RequestMapping(value="/factory",method= RequestMethod.PUT)
    public Factory updateFactory(@RequestBody Factory newFactory){

        long adminId= newFactory.getAdmistrator_id();
        long factoryId= newFactory.getFactory_id();
        String name=newFactory.getName();
        String address= newFactory.getAddress();
        String details = newFactory.getDetails();
        String region = newFactory.getRegion();
        String image = newFactory.getImage();
        String lat = newFactory.getLat();
        String lng = newFactory.getLng();
        return newFactory;
    }
    @RequestMapping(value="/factorybyadmin/{id}",method= RequestMethod.GET)
    public long getFactoryByAdmin(@PathVariable("id") long id){
        return factoryRepo.getFactoryIDByAdmin(id);
    }
}
