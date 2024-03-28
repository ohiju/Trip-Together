package com.ssafy.triptogether.attraction.service;

import com.ssafy.triptogether.attraction.data.FlashmobCreateRequest;
import com.ssafy.triptogether.attraction.data.response.AttractionListItemResponse;
import com.ssafy.triptogether.attraction.data.FlashmobElementFindResponse;
import com.ssafy.triptogether.attraction.data.FlashmobListFindResponse;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateRequest;
import com.ssafy.triptogether.attraction.data.FlashmobUpdateResponse;
import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.attraction.domain.AttractionImage;
import com.ssafy.triptogether.attraction.repository.AttractionRepository;
import com.ssafy.triptogether.attraction.utils.AttractionUtils;
import com.ssafy.triptogether.attraction.data.response.AttractionDetailFindResponse;
import com.ssafy.triptogether.global.utils.distance.MysqlNativeSqlCreator;
import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.flashmob.repository.FlashMobRepository;
import com.ssafy.triptogether.flashmob.utils.FlashMobUtils;
import com.ssafy.triptogether.member.domain.Member;
import com.ssafy.triptogether.member.domain.MemberFlashMob;
import com.ssafy.triptogether.member.domain.RoomStatus;
import com.ssafy.triptogether.member.repository.MemberFlashMobRepository;
import com.ssafy.triptogether.member.repository.MemberRepository;
import com.ssafy.triptogether.member.utils.MemberUtils;
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
    private final MemberRepository memberRepository;
    private final MemberFlashMobRepository memberFlashMobRepository;

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
    public FlashmobListFindResponse findFlashmobList(long attractionId, long memberId) {
        // find all flashmob responses
        List<FlashmobElementFindResponse> elements = FlashMobUtils.findAllFlashmobElementsByAttractionId(flashMobRepository, attractionId, memberId);

        // create response & return
        return FlashmobListFindResponse.builder().elements(elements).build();
    }

    @Transactional
    @Override
    public FlashmobUpdateResponse updateFlashmob(long flashmobId, FlashmobUpdateRequest flashmobUpdateRequest) {
        FlashMob flashMob = FlashMobUtils.findByFlashmobId(flashMobRepository, flashmobId);
        flashMob.update(flashmobUpdateRequest);
        return FlashmobUpdateResponse.builder().flashmobId(flashmobId).build();
    }

    // TODO: 채팅방(소켓) 생성
    @Transactional
    @Override
    public void createFlashmob(Long memberId, long attractionId, FlashmobCreateRequest flashmobCreateRequest) {
        Attraction attraction = AttractionUtils.findByAttractionId(attractionRepository, attractionId);
        Member member = MemberUtils.findByMemberId(memberRepository, memberId);

        FlashMob flashMob = FlashMob.builder()
            .attraction(attraction)
            .title(flashmobCreateRequest.title())
            .startAt(flashmobCreateRequest.startTime())
            .maxMemberCount(flashmobCreateRequest.maxUsers())
            .build();
        flashMobRepository.save(flashMob);

        MemberFlashMob memberFlashMob = MemberFlashMob.builder()
            .flashMob(flashMob)
            .member(member)
            .isMaster(true)
            .roomStatus(RoomStatus.ATTEND)
            .build();
        memberFlashMobRepository.save(memberFlashMob);
    }

    @Override
    public List<AttractionListItemResponse> findAttractionsClick(
        double latitude, double longitude, double latitudeDelta, double longitudeDelta, String category) {
        double distance = new MysqlNativeSqlCreator().getDistance(
            latitude,
            longitude,
            latitudeDelta/ 2,
            longitudeDelta / 2
        );
        return attractionRepository.findAttractionClick(
            latitude,
            longitude,
            distance,
            category
        );
    }

    @Override
    public List<AttractionListItemResponse> findAttractionsSearch(
        double latitude, double longitude, String keyword) {
        return attractionRepository.findAttractionSearch(
            latitude,
            longitude,
            keyword
        );
    }
}
