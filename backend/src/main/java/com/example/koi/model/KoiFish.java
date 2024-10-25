package com.example.koi.model;

import javax.persistence.*;

@Entity
@Table(name = "KoiFish")
public class KoiFish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer koiId;

    private String name;
    private Integer age;
    private Float price;
    private String imageUrl;
    private String description;
    private String size;

    // Getter và Setter
    public Integer getKoiId() {
        return koiId;
    }

    public void setKoiId(Integer koiId) {
        this.koiId = koiId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
