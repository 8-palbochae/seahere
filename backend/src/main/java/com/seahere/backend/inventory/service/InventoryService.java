package com.seahere.backend.inventory.service;

import com.seahere.backend.inventory.entity.ProductsEntity;

public interface InventoryService {
    ProductsEntity findAllProducts();
    void deleteInventory();
    void modifyInventory();
}