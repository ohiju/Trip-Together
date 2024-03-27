package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.attraction.data.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateResponse;
import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.attraction.domain.AttractionImage;
import com.ssafy.triptogether.attraction.repository.AttractionRepository;
import com.ssafy.triptogether.attraction.utils.AttractionUtils;
import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.flashmob.repository.FlashMobRepository;
import com.ssafy.triptogether.flashmob.utils.FlashMobUtils;
import com.ssafy.triptogether.plan.data.response.AttractionDetailFindResponse;
import com.ssafy.triptogether.plan.data.response.ReviewResponse;
import com.ssafy.triptogether.review.repository.ReviewRepository;
import com.ssafy.triptogether.review.utils.ReviewUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class AttractionServiceImpl implements AttractionSaveService, AttractionLoadService {

    private final AttractionRepository attractionRepository;
    private final ReviewRepository reviewRepository;
    private final FlashMobRepository flashMobRepository;

    @Override
    public AttractionDetailFindResponse findAttractionDetail(long attractionId) {
        // find attraction & reviews
        Attraction attraction = AttractionUtils.findByAttractionId(attractionRepository, attractionId);
        List<ReviewResponse> reviewResponses = ReviewUtils.findAllByAttractionId(reviewRepository, attractionId);

        // set attraction detail & return
        return AttractionDetailFindResponse.builder()
                .attractionId(attraction.getId())
                .avgPrice(attraction.getAvgPrice())
                .startAt(attraction.getStartAt())
                .endAt(attraction.getEndAt())
                .attractionImageUrls(attraction.getAttractionImages().stream().map(AttractionImage::getImageUrl).toList())
                .latitude(attraction.getLatitude())
                .longitude(attraction.getLongitude())
                .reviews(reviewResponses)
                .build();
    }

    @Transactional
    @Override
    public FlashmobUpdateResponse updateFlashmob(long flashmobId, FlashmobUpdateRequest flashmobUpdateRequest) {
        FlashMob flashMob = FlashMobUtils.findByFlashmobId(flashMobRepository, flashmobId);
        flashMob.update(flashmobUpdateRequest);
        return FlashmobUpdateResponse.builder().flashmobId(flashmobId).build();
    }
}
