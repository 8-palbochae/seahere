package com.seahere.backend.outgoing.controller;

import com.seahere.backend.outgoing.controller.response.OutgoingReqMockDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OutgoingReqController {

    private List<OutgoingReqMockDto> mockDtoList = new ArrayList<>();

    @GetMapping("/outgoings")
    public ResponseEntity<List> outgoingReqList(){
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        mockDtoList.add(new OutgoingReqMockDto("광어"));
        return ResponseEntity.ok(mockDtoList);
    }
}
