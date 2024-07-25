package com.seahere.backend.outgoing.controller;

import com.seahere.backend.outgoing.controller.response.OutgoingReqMockDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OutgoingReqController {

    @GetMapping("/outgoings")
    public ResponseEntity<List> outgoingReqList(){
        ArrayList<OutgoingReqMockDto> mockList = new ArrayList<>();
        mockList.add(new OutgoingReqMockDto(1L,"스파로스","광어외3...","요청"));
        mockList.add(new OutgoingReqMockDto(2L,"kdt","우럭외3...","요청"));
        mockList.add(new OutgoingReqMockDto(3L,"부산시","고등어외3...","요청"));
        mockList.add(new OutgoingReqMockDto(4L,"신세계","갈치외3...","요청"));
        mockList.add(new OutgoingReqMockDto(5L,"아이앤씨","다시마외3...","요청"));
        mockList.add(new OutgoingReqMockDto(5L,"아이앤씨","다시마외3...","요청"));
        mockList.add(new OutgoingReqMockDto(5L,"아이앤씨","다시마외3...","요청"));
        mockList.add(new OutgoingReqMockDto(5L,"아이앤씨","다시마외3...","요청"));

        return ResponseEntity.ok(mockList);
    }
}
