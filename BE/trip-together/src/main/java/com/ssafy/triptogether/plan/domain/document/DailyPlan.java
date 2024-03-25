package com.ssafy.triptogether.plan.domain.document;

import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Document(collation = "daily_plan")
public class DailyPlan {
    @Id
    private String id; // planId:date:order

    @Field(name = "date")
    private LocalDate date;

    @Field(name = "order")
    private Integer order;

    @Field(name = "plan_id")
    private Long planId;

    @Field(name = "attraction_id")
    private Long attractionId;

    @Field(name = "attraction_name")
    private String attractionName;

    @Field(name = "avg_rating")
    private Integer avgRating;

    @Field(name = "avg_price")
    private Double avgPrice;

    @Field(name = "thumbnail_image_url")
    private String thumbnailImageUrl;

    @Field(name = "address")
    private String address;
}
