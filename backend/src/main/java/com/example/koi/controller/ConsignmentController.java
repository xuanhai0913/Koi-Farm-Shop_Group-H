package com.example.koi.controller;

import com.example.koi.model.Consignment;
import com.example.koi.service.ConsignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/consignment")
public class ConsignmentController {

    @Autowired
    private ConsignmentService consignmentService;

    @GetMapping
    public List<Consignment> getAllConsignments() {
        return consignmentService.findAll();
    }
}
