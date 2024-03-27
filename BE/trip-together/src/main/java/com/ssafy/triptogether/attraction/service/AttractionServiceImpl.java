package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.attraction.domain.AttractionImage;
import com.ssafy.triptogether.attraction.repository.AttractionRepository;
import com.ssafy.triptogether.attraction.utils.AttractionUtils;
import com.ssafy.triptogether.attraction.data.response.AttractionDetailFindResponse;
import com.ssafy.triptogether.global.utils.distance.MysqlNativeSqlCreator;
import com.ssafy.triptogether.global.utils.distance.NativeSqlCreator;
import com.ssafy.triptogether.plan.data.response.ReviewResponse;
import com.ssafy.triptogether.review.repository.ReviewRepository;
import com.ssafy.triptogether.review.utils.ReviewUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class AttractionServiceImpl implements AttractionLoadService {

    private final AttractionRepository attractionRepository;
    private final ReviewRepository reviewRepository;

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

    @Override
    public List<AttractionListItemResponse> findAttractionsClick(double latitude, double longitude,
        double latitudeDelta, double longitudeDelta) {
        double distance = new MysqlNativeSqlCreator().getDistance(
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta
        );
        return attractionRepository.findAttractionClick(
            latitude,
            longitude,
            distance
        );
    }
}
