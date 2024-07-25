package com.seahere.backend.outgoing.controller.response;

import lombok.Getter;

@Getter
public class OutgoingReqMockDto {
    private String productName;

    public OutgoingReqMockDto(String productName) {
        this.productName = productName;
    }
}
