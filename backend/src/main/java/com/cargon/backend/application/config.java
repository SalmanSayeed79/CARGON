package com.cargon.cargonbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
@Profile("ORACLE")
public class config {


    @Bean
    public DataSource getDateSource() {
        return DataSourceBuilder.create().url("jdbc:oracle:thin:@localhost:1521/ORACLE").username("system").password("test1234").build();
    }
}
