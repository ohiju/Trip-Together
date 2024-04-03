package com.ssafy.triptogether.global.utils;

import java.math.BigDecimal;

import com.ssafy.triptogether.global.exception.exceptions.category.BadRequestException;
import com.ssafy.triptogether.global.exception.response.ErrorCode;

public class BigDecimalUtil {
	public static String add(String a, String b) {
		return (new BigDecimal(a).add(new BigDecimal(b))).toString();
	}

	public static String subtract(String a, String b) {
		return (new BigDecimal(a).subtract(new BigDecimal(b))).toString();
	}

	public static String withdrawalBalance(String balance, String newBalance) {
		BigDecimal balanceBD = new BigDecimal(balance);
		BigDecimal newBalanceBD = new BigDecimal(newBalance);
		if (balanceBD.compareTo(newBalanceBD) < 0) { // 내가 크면 +
			throw new BadRequestException("TripAccountExchange", ErrorCode.TRIP_ACCOUNT_BALANCE_BAD_REQUEST);
		}
		return (new BigDecimal(balance).subtract(new BigDecimal(newBalance))).toString();
	}
}
