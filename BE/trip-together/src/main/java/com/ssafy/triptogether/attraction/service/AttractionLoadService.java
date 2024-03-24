package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.plan.data.response.AttractionDetailFindResponse;

public interface AttractionLoadService {
    AttractionDetailFindResponse findAttractionDetail(long attractionId);
}
