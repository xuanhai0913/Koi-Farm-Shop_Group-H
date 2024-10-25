package com.example.koi.repository;

import com.example.koi.model.KoiFish;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KoiFishRepository extends JpaRepository<KoiFish, Integer> {
    // Bạn có thể thêm các phương thức tìm kiếm tại đây nếu cần
}
