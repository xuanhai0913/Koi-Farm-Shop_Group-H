package com.example.koi.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Consignment")
public class Consignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer consignmentId;

    private Date consignmentDate;
    private String status;

    @ManyToOne
    @JoinColumn(name = "koi_id", nullable = false)
    private KoiFish koiFish;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Getters and Setters
}
