package com.ssafy.triptogether.review.domain;

import com.ssafy.triptogether.attraction.domain.Attraction;
import com.ssafy.triptogether.global.domain.BaseEntity;
import com.ssafy.triptogether.member.domain.Member;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "review")
public class Review extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @NotNull
    @Column(name = "rating")
    private Integer rating;

    @NotBlank
    @Column(name = "content", length = 3000)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attraction_id")
    private Attraction attraction;

    @Builder
    public Review(Integer rating, String content, Member member, Attraction attraction) {
        this.rating = rating;
        this.content = content;
        setMember(member);
        setAttraction(attraction);
    }

    public void setMember(Member member) {
        this.member = member;
        member.getReviews().add(this);
    }

    public void setAttraction(Attraction attraction) {
        this.attraction = attraction;
        attraction.getReviews().add(this);
    }
}
