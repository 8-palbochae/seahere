package com.seahere.backend.inventory.repository;

import com.seahere.backend.inventory.entity.ProductsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface InventoryRepository extends JpaRepository<ProductsEntity, Long> {
    List<ProductsEntity> findAllByCompanyId(Long companyId);
    void deleteById(Long id); // JpaRepository에 이미 존재
}