package com.ssafy.triptogether.attraction.controller;

import com.ssafy.triptogether.attraction.data.FlashmobListFindResponse;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateResponse;
import com.ssafy.triptogether.attraction.data.response.RegionsLoadResponse;
import com.ssafy.triptogether.attraction.service.AttractionLoadService;
import com.ssafy.triptogether.attraction.service.AttractionSaveService;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.global.data.response.StatusCode;
import com.ssafy.triptogether.plan.data.response.AttractionDetailFindResponse;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.ssafy.triptogether.global.data.response.StatusCode.*;
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

	@PatchMapping("/attractions/{attraction_id}/flashmobs/{flashmob_id}")
	public ResponseEntity<ApiResponse<FlashmobUpdateResponse>> updateFlashmob(
		@PathVariable("attraction_id") long attractionId,
		@PathVariable("flashmob_id") long flashmobId,
		@RequestBody FlashmobUpdateRequest flashmobUpdateRequest
	) {
		FlashmobUpdateResponse response = attractionSaveService.updateFlashmob(flashmobId, flashmobUpdateRequest);
		return ApiResponse.toResponseEntity(OK, SUCCESS_FLASHMOB_UPDATE, response);
	}

	@GetMapping("/attractions/{attraction_id}/flashmobs")
	public ResponseEntity<ApiResponse<FlashmobListFindResponse>> findFlashmobList(
		@PathVariable("attraction_id") long attractionId
		//        @AuthenticationPrincipal SecurityMember securityMember
	) {
		//        long memberId = securityMember.getId();
		long memberId = 2L;
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
}
