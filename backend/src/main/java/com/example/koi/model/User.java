package com.example.koi.model;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    private String email;
    private String username;
    private String address;
    private String contactInfo;

    // Getters and Setters
}
