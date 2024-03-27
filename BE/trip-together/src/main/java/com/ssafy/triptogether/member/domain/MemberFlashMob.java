package com.ssafy.triptogether.member.domain;

import com.ssafy.triptogether.flashmob.domain.FlashMob;
import com.ssafy.triptogether.global.domain.BaseEntity;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member_flash_mob")
public class MemberFlashMob extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_flash_mob_id")
    private Long id;

    @NotNull
    @Column(name = "is_master")
    private Boolean isMaster;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private RoomStatus roomStatus;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "flash_mob_id")
    private FlashMob flashMob;

    @Builder
    public MemberFlashMob(Boolean isMaster, RoomStatus roomStatus, Member member, FlashMob flashMob) {
        this.isMaster = isMaster;
        this.roomStatus = roomStatus;
        setMember(member);
        setFlashMob(flashMob);
    }

    public void setFlashMob(FlashMob flashMob) {
        this.flashMob = flashMob;
        flashMob.getMemberFlashMobs().add(this);
    }

    public void setMember(Member member) {
        this.member = member;
        member.getMemberFlashMobs().add(this);
    }
}
