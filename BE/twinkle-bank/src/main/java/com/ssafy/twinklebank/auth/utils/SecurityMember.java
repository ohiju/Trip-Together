package com.ssafy.twinklebank.auth.utils;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ssafy.twinklebank.member.domain.Member;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SecurityMember implements UserDetails {

	private Long id;
	private String username;
	private String password;

	public SecurityMember(Member member) {
		this.id = member.getId();
		this.username = member.getUsername();
		this.password = member.getPassword();
	}

	public SecurityMember(Long id, String username, String password) {
		this.id = id;
		this.username = username;
		this.password = password;
	}

	public SecurityMember(Authentication authentication) {
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// 사용자가 "AUTHORITY" 권한을 가지고 있음.
		return Collections.singleton(new SimpleGrantedAuthority("AUTHORITY"));
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}

	@Override
	public boolean isAccountNonExpired() { // false 반환시 : 계정 만료
		return true;
	}

	@Override
	public boolean isAccountNonLocked() { // false 반환 시 : 계정 잠김
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() { // false 반환 시 : 인증 정보 만료
		return true;
	}

	@Override
	public boolean isEnabled() { // false 반환 시 : 계정 비활성화
		return true;
	}
}
