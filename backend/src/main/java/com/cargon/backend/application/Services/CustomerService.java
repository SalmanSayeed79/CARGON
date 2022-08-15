package com.cargon.backend.application.Services;

import com.cargon.backend.application.Entity.Customer;
import com.cargon.backend.application.Interface.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*" )
@RestController
public class CustomerService {
    @Autowired
    CustomerRepository customerRepo;
    //
    //ADDING SOME ENDPOINTS

    @RequestMapping(value="/customers",method= RequestMethod.GET)
    public List<Customer> Customers(){
        Customer customer=new Customer("Salman","01234121","Dhanmondi,Dhaka","image","Dhaka","23.7461" ,"90.3742","salmansayeed5345@gmail.com");
        customerRepo.saveAndFlush(customer);
        List<Customer> customers=customerRepo.findAll();
        customers.forEach(a-> {
            //ans=ans+a.toString();
            System.out.println(a.toString());
        });
        //System.out.println(customerRepo.findAll().stream().toString());
        return customers;
    }
    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/customer/{customerId}",method= RequestMethod.GET)
    public Optional<Customer> CustomerById(@PathVariable("customerId") long customerId){
        Customer customer=new Customer("Salman","01234121","Dhanmondi,Dhaka","image","Dhaka","23.7461° N",", 90.3742° E","salmansayeed5345@gmail.com");
        customerRepo.saveAndFlush(customer);

        //Optional<Customer> customerById=customerRepo.findById(customerId);
        Optional<Customer> customerById = customerRepo.searchCustomerByID(customerId);

        //System.out.println(customerRepo.findAll().stream().toString());
        return customerById;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/customer/{region}",method= RequestMethod.GET)
    public List<Customer> CustomerByRegion(@PathVariable("region") String region){

        Customer customer=new Customer("Salman","01234121","Dhanmondi,Dhaka","image","Dhaka","23.7461° N",", 90.3742° E","salmansayeed5345@gmail.com");
        customerRepo.saveAndFlush(customer);

        //Optional<Customer> customerById=customerRepo.findById(customerId);
        List<Customer> customersByRegion = customerRepo.searchByRegion(region);

        //System.out.println(customerRepo.findAll().stream().toString());
        return customersByRegion;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/customer/{phoneNumber}",method= RequestMethod.GET)
    public Optional<Customer> CustomerByPhone(@PathVariable("phoneNumber") String phoneNumber){

        Customer customer=new Customer("Salman","01234121","Dhanmondi,Dhaka","image","Dhaka","23.7461° N",", 90.3742° E","salmansayeed5345@gmail.com");
        customerRepo.saveAndFlush(customer);

        //Optional<Customer> customerById=customerRepo.findById(customerId);
        Optional<Customer> customerByPhone = customerRepo.searchByPhone(phoneNumber);

        //System.out.println(customerRepo.findAll().stream().toString());
        return customerByPhone;
    }

    @CrossOrigin(origins = "http://localhost:8080")
    @RequestMapping(value="/customer/{email}",method= RequestMethod.GET)
    public Optional<Customer> CustomerByEmail(@PathVariable("email") String mailAddress){

        Customer customer=new Customer("Salman","01234121","Dhanmondi,Dhaka","image","Dhaka","23.7461° N",", 90.3742° E","salmansayeed5345@gmail.com");
        customerRepo.saveAndFlush(customer);

        //Optional<Customer> customerById=customerRepo.findById(customerId);
        Optional<Customer> customerByEmail = customerRepo.searchByEmail(mailAddress);

        //System.out.println(customerRepo.findAll().stream().toString());
        return customerByEmail;
    }


}
