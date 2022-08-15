package com.cargon.backend.application.Services;

import com.cargon.backend.application.Entity.Adminstrator;
import com.cargon.backend.application.Entity.Product;
import com.cargon.backend.application.Interface.AdminstratorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class AdminstratorService {
    @Autowired
    AdminstratorRepository adminRepo;


    @RequestMapping(value="/adminstrators",method= RequestMethod.GET)
    public List<Adminstrator> Adminstrators(){
        return adminRepo.getAllAdmins();
    }

    @RequestMapping(value="/adminstrator/mail/{email}",method= RequestMethod.GET)
    public long getIDByEmail(@PathVariable("email") String email){
        System.out.println(email);
        return adminRepo.getIDbyEmail(email);
    }

    @RequestMapping(value="/adminstrator/{adminId}",method= RequestMethod.GET)
    public Adminstrator AdminById(@PathVariable("adminId") long adminId){
        return adminRepo.searchAdminByID(adminId);
    }
    @RequestMapping(value="/adminstrator",method= RequestMethod.POST)
    public Adminstrator addAdmin(@RequestBody Adminstrator admin){
        adminRepo.saveAndFlush(admin);
        return admin;
    }
    @RequestMapping(value="/adminstrator/{id}",method= RequestMethod.PUT)
    public int updateAdmin(@PathVariable("id") long id,@RequestBody Adminstrator admin) {
        //System.out.println(prod.getName());
        try{
            System.out.println(admin.getAdminstrator_id());
            //productRepo.deleteById(id);
            adminRepo.updateAdmin(
                    id,
                    admin.getName(),
                    admin.getPhoneNumber(),
                    admin.getAddress(),
                    admin.getExperience()
            );
            //productRepo.saveAndFlush(prod);
            return 1;
        }
        catch (EmptyResultDataAccessException e){
            return 0;
        }

        /// return productRepo.getGenericsCount();
    }

}
