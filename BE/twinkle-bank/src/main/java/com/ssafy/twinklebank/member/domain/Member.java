package com.ssafy.twinklebank.member.domain;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.ssafy.twinklebank.account.domain.Account;
import com.ssafy.twinklebank.global.domain.BaseEntity;
import com.ssafy.twinklebank.savingaccount.domain.SavingAccount;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member")
public class Member extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "member_id")
	private Long id;

	@NotBlank
	@Column(name = "uuid")
	private String uuid;

	@Column(name = "name")
	private String name;

	@Enumerated(EnumType.STRING)
	private GenderType gender;

	@Column(name = "birth")
	private LocalDate birth;

	@NotBlank
	@Column(name = "username")
	private String username;

	@NotBlank
	@Column(name = "password")
	private String password;

	@JsonIgnore
	@OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
	private List<Account> accounts = new ArrayList<>();

	@JsonIgnore
	@OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
	private List<SavingAccount> savingAccounts = new ArrayList<>();

	@Builder
	public Member(String name, String username, String password) {
		this.name = name;
		this.username = username;
		this.password = password;
	}
}
