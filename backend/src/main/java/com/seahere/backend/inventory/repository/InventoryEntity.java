package com.seahere.backend.inventory.repository;

import lombok.Getter;
import lombok.Setter;
import java.util.Date;

@Getter
@Setter
public class InventoryEntity {
    private int inventoryId;
    private int inventoryQuantity;
    private int price;
    private Date incomeDate;
}