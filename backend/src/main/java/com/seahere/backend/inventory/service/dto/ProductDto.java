//package com.seahere.backend.inventory.service.dto;
//
//import lombok.Getter;
//import lombok.Setter;
//
//@Getter
//@Setter
//public class ProductDto {
//    private Long memberId;
//    private String email;
//    private String nickname;
//    private String passwd;
//    private String pno;
//    private String role;
//    private String status;
//    private String certificationCode;
//
//    public static ProductDto from(UpdateRequest request){
//        return ProductDto.builder()
//                .memberId(request.getMemberId())
//                .nickname(request.getNickname())
//                .pno(request.getPno())
//                .build();
//    }
//
//    public static ProductDto from(SignUpRequest request){
//        return ProductDto.builder()
//                .email(request.getEmail())
//                .nickname(request.getNickname())
//                .passwd(request.getPasswd())
//                .pno(request.getPno())
//                .status(MemberStatus.PENDING.toString())
//                .certificationCode(request.getCertificationCode())
//                .build();
//    }
//
//    public static ProductDto from(PwdUpdateRequest request) {
//        return ProductDto.builder()
//                .memberId(request.getMemberId())
//                .passwd(request.getPasswd())
//                .build();
//    }
//}
