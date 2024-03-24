package com.ssafy.triptogether.attraction.controller;

import com.ssafy.triptogether.attraction.service.AttractionLoadService;
import com.ssafy.triptogether.global.data.response.ApiResponse;
import com.ssafy.triptogether.plan.data.response.AttractionDetailFindResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.ssafy.triptogether.global.data.response.StatusCode.SUCCESS_ATTRACTION_DETAIL_FIND;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/plan/v1/attractions")
@RequiredArgsConstructor
public class AttractionController {

    private final AttractionLoadService attractionLoadService;

    @GetMapping("/{attraction_id}")
    public ResponseEntity<ApiResponse<AttractionDetailFindResponse>> findAttractionDetail(
            @PathVariable("attraction_id") long attractionId
    ) {
        AttractionDetailFindResponse response = attractionLoadService.findAttractionDetail(attractionId);
        return ApiResponse.toResponseEntity(OK, SUCCESS_ATTRACTION_DETAIL_FIND, response);
    }
}
