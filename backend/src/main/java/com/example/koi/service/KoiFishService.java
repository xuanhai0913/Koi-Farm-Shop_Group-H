package com.example.koi.service;

import com.example.koi.model.KoiFish;
import com.example.koi.repository.KoiFishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KoiFishService {

    @Autowired
    private KoiFishRepository koiFishRepository;

    public List<KoiFish> findAll() {
        return koiFishRepository.findAll();
    }

    // Thêm các phương thức khác nếu cần
}
