package com.ssafy.triptogether.attraction.domain;

import lombok.Getter;

@Getter
public enum Nation {
    FRANCE("프랑스"),
    UK("영국"),
    SPAIN("스페인");

    private final String message;

    Nation(String message) {
        this.message = message;
    }
}
