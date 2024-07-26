//package com.seahere.backend.inventory.controller;
//
//import com.seahere.backend.inventory.domain.Product;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//import com.seahere.backend.common.exception.SeaHereException;
//import com.seahere.backend.common.response.ErrorResponse;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.ResponseEntity;
//import com.seahere.backend.inventory.service.InventoryService;
//
//import java.util.List;
//
//@RestController
//public class InventoryController {
//    InventoryService inventoryService;
//
//    @GetMapping
//    public List<Product> findAll(Long companyId){
//        List<Product> products = inventoryService.findAll(companyId);
//        return products;
//    }
//}
