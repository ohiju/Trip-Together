package com.ssafy.triptogether.syncaccount.domain;

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
@Table(name = "sync_account")
public class SyncAccount extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sync_account_id")
    private Long id;

    @NotNull
    @Column(name = "is_main")
    private Boolean isMain;

    @NotBlank
    @Column(name = "name")
    private String name;

    @NotBlank
    @Column(name = "num")
    private String num;

    @NotBlank
    @Column(name = "uuid")
    private String uuid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public SyncAccount(Boolean isMain, String name, String num, String uuid, Member member) {
        this.isMain = isMain;
        this.name = name;
        this.num = num;
        this.uuid = uuid;
        setMember(member);
    }

    public void setMember(Member member) {
        this.member = member;
        member.getSyncAccounts().add(this);
    }
}
