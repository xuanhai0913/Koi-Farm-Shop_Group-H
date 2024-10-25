package com.example.koi.controller;

import com.example.koi.model.KoiFish;
import com.example.koi.repository.KoiFishRepository;
import com.example.koi.service.KoiFishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/koi")
public class KoiFishController {

    @Autowired
    private KoiFishService koiFishService;

    @GetMapping
    public List<KoiFish> getAllKoiFish() {
        return koiFishService.findAll();
    }
}
