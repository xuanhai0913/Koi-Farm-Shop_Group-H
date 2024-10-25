package com.example.koi.model;

import javax.persistence.*;

@Entity
@Table(name = "KoiType")
public class KoiType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer koiTypeId;

    private String typeName;

    // Getters and Setters
}
