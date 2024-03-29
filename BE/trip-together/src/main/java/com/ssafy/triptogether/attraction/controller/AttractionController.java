package com.ssafy.triptogether.attraction.controller;

import com.ssafy.triptogether.attraction.data.request.FlashmobCreateRequest;
import com.ssafy.triptogether.attraction.data.request.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.data.response.*;
import com.ssafy.triptogether.attraction.service.AttractionLoadService;
import com.ssafy.triptogether.attraction.service.AttractionSaveService;
import com.ssafy.triptogether.auth.utils.SecurityMember;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/attraction/v1")
@RequiredArgsConstructor
public class AttractionController {

	private final AttractionLoadService attractionLoadService;
	private final AttractionSaveService attractionSaveService;

	@GetMapping("/attractions/{attraction_id}")
	public ResponseEntity<ApiResponse<AttractionDetailFindResponse>> findAttractionDetail(
		@PathVariable("attraction_id") long attractionId
	) {
		AttractionDetailFindResponse response = attractionLoadService.findAttractionDetail(attractionId);
		return ApiResponse.toResponseEntity(OK, SUCCESS_ATTRACTION_DETAIL_FIND, response);
	}

    // TODO: 제대로 된 값을 반환하는 지 데이터 생성 후 테스트
    @GetMapping("/attractions/click")
    public ResponseEntity<ApiResponse<List<AttractionListItemResponse>>> getAttractionsClick (
        @RequestParam double latitude,
        @RequestParam double longitude,
        @RequestParam("latitude_delta") double latitudeDelta,
        @RequestParam("longitude_delta") double longitudeDelta,
        @RequestParam String category
    ) {
        List<AttractionListItemResponse> attractionListItemResponseList =
            attractionLoadService.findAttractionsClick(
                latitude,
                longitude,
                latitudeDelta,
                longitudeDelta,
                category
            );
        return ApiResponse.toResponseEntity(OK, SUCCESS_ATTRACTION_LIST_CLICK_FIND, attractionListItemResponseList);
    }

    // TODO: 제대로 된 값을 반환하는 지 데이터 생성 후 테스트
    @GetMapping("/attractions/search")
    public ResponseEntity<ApiResponse<List<AttractionListItemResponse>>> getAttractionsSearch (
        @RequestParam double latitude,
        @RequestParam double longitude,
        @RequestParam String keyword
    ) {
        List<AttractionListItemResponse> attractionListItemResponseList =
            attractionLoadService.findAttractionsSearch(
                latitude,
                longitude,
                keyword
            );
        return ApiResponse.toResponseEntity(OK, SUCCESS_ATTRACTION_LIST_CLICK_FIND, attractionListItemResponseList);
    }

    @PostMapping("/attractions/{attraction_id}/flashmobs")
    public ResponseEntity<ApiResponse<Long>> createFlashmob(
        @AuthenticationPrincipal SecurityMember securityMember,
        @PathVariable("attraction_id") long attractionId,
        @RequestBody FlashmobCreateRequest flashmobCreateRequest
    ) {
        long memberId = securityMember.getId();
        long flashmobId = attractionSaveService.createFlashmob(memberId, attractionId, flashmobCreateRequest);
        return ApiResponse.toResponseEntity(CREATED, SUCCESS_CREATE_FLASHMOB, flashmobId);
    }

    @PatchMapping("/attractions/{attraction_id}/flashmobs/{flashmob_id}")
    public ResponseEntity<ApiResponse<FlashmobUpdateResponse>> updateFlashmob(
        @PathVariable("attraction_id") long attractionId,
        @PathVariable("flashmob_id") long flashmobId,
        @Valid @RequestBody FlashmobUpdateRequest flashmobUpdateRequest
    ) {
        FlashmobUpdateResponse response = attractionSaveService.updateFlashmob(flashmobId, flashmobUpdateRequest);
        return ApiResponse.toResponseEntity(OK, SUCCESS_FLASHMOB_UPDATE, response);
    }

	@GetMapping("/attractions/{attraction_id}/flashmobs")
	public ResponseEntity<ApiResponse<FlashmobListFindResponse>> findFlashmobList(
        @PathVariable("attraction_id") long attractionId,
        @AuthenticationPrincipal SecurityMember securityMember
	) {
        long memberId = securityMember.getId();
		FlashmobListFindResponse response = attractionLoadService.findFlashmobList(attractionId, memberId);
		return ApiResponse.toResponseEntity(OK, SUCCESS_FLASHMOB_LIST_FIND, response);
	}

	@GetMapping("/regions")
	public ResponseEntity<ApiResponse<RegionsLoadResponse>> regionsLoad(
		@RequestParam(required = false, value = "name") String name
	) {
		RegionsLoadResponse regionsLoadResponse = attractionLoadService.regionsLoad(name);

		return ApiResponse.toResponseEntity(
			OK, SUCCESS_REGIONS_LOAD, regionsLoadResponse
		);
	}

    @GetMapping("/attractions/flashmobs")
    public ResponseEntity<ApiResponse<AttractionFlashmobListFindResponse>> findAttractionFlashmobList(
        @RequestParam double latitude,
        @RequestParam double longitude,
        @RequestParam("latitude_delta") double latitudeDelta,
        @RequestParam("longitude_delta") double longitudeDelta,
        @AuthenticationPrincipal SecurityMember securityMember
    ) {
        Long memberId = securityMember.getId();
        AttractionFlashmobListFindResponse response = attractionLoadService.findAttractionFlashmobList(memberId, latitude, longitude, latitudeDelta, longitudeDelta);
        return ApiResponse.toResponseEntity(OK, SUCCESS_ATTRACTION_LIST_CLICK_FIND, response);
    }
}
