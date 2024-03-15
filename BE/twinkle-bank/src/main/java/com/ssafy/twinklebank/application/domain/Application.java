package com.ssafy.twinklebank.application.domain;

import com.ssafy.twinklebank.global.domain.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "application")
public class Application extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "application_id")
	private Long id;

	@NotBlank
	@Column(name = "client_id")
	private String clientId;

	@NotBlank
	@Column(name = "name")
	private String name;

	@NotBlank
	@Column(name = "redirect_url")
	private String redirectUrl;

	@Column(name = "access_key")
	private String accessKey;

	@Column(name = "secret_key")
	private String secretKey;

	@Builder
	public Application(String clientId, String name, String redirectUrl) {
		this.clientId = clientId;
		this.name = name;
		this.redirectUrl = redirectUrl;
	}
}
