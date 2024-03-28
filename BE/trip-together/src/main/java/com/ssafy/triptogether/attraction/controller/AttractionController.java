package com.ssafy.triptogether.attraction.controller;

import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateResponse;
import com.ssafy.triptogether.attraction.service.AttractionLoadService;
import com.ssafy.triptogether.attraction.service.AttractionSaveService;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.attraction.data.response.AttractionDetailFindResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.triptogether.global.data.response.StatusCode.SUCCESS_ATTRACTION_DETAIL_FIND;
import static com.ssafy.triptogether.global.data.response.StatusCode.SUCCESS_FLASHMOB_UPDATE;
import static org.springframework.http.HttpStatus.OK;

import java.util.List;

@RestController
@RequestMapping("/plan/v1/attractions")
@RequiredArgsConstructor
public class AttractionController {

    private final AttractionLoadService attractionLoadService;
    private final AttractionSaveService attractionSaveService;

    @GetMapping("/{attraction_id}")
    public ResponseEntity<ApiResponse<AttractionDetailFindResponse>> findAttractionDetail(
        @PathVariable("attraction_id") long attractionId
    ) {
        AttractionDetailFindResponse response = attractionLoadService.findAttractionDetail(attractionId);
        return ApiResponse.toResponseEntity(OK, SUCCESS_ATTRACTION_DETAIL_FIND, response);
    }

    // TODO: 제대로 된 값을 반환하는 지 데이터 생성 후 테스트
    @GetMapping
    public ResponseEntity<ApiResponse<List<AttractionListItemResponse>>> getAttractionsClick(
        @RequestParam double latitude,
        @RequestParam double longitude,
        @RequestParam("latitude_delta") double latitudeDelta,
        @RequestParam("longitude_delta") double longitudeDelta
    ) {
        List<AttractionListItemResponse> attractionListItemResponseList =
            attractionLoadService.findAttractionsClick(
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta
            );
        return ApiResponse.toResponseEntity(OK, SUCCESS_ATTRACTION_LIST_CLICK_FIND, attractionListItemResponseList);

    @PatchMapping("/{attraction_id}/flashmobs/{flashmob_id}")
    public ResponseEntity<ApiResponse<FlashmobUpdateResponse>> updateFlashmob(
        @PathVariable("attraction_id") long attractionId,
        @PathVariable("flashmob_id") long flashmobId,
        @RequestBody FlashmobUpdateRequest flashmobUpdateRequest
    ) {
        FlashmobUpdateResponse response = attractionSaveService.updateFlashmob(flashmobId, flashmobUpdateRequest);
        return ApiResponse.toResponseEntity(OK, SUCCESS_FLASHMOB_UPDATE, response);
    }
}
