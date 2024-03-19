package com.ssafy.twinklebank.global.exception.handler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.ssafy.twinklebank.global.exception.exceptions.category.BadRequestException;
import com.ssafy.twinklebank.global.exception.exceptions.category.ConflictException;
import com.ssafy.twinklebank.global.exception.exceptions.category.ForbiddenException;
import com.ssafy.twinklebank.global.exception.exceptions.category.IAmATeapotException;
import com.ssafy.twinklebank.global.exception.exceptions.category.NotFoundException;
import com.ssafy.twinklebank.global.exception.exceptions.category.TimeOutException;
import com.ssafy.twinklebank.global.exception.exceptions.category.TripRuntimeException;
import com.ssafy.twinklebank.global.exception.exceptions.category.UnAuthorizedException;
import com.ssafy.twinklebank.global.exception.exceptions.category.UnsupportedMediaTypeException;
import com.ssafy.twinklebank.global.exception.response.ErrorResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestControllerAdvice
public class GlobalExceptionHandler {
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(BadRequestException.class)
	public ErrorResponse badRequestHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 400

	@ResponseStatus(HttpStatus.UNAUTHORIZED)
	@ExceptionHandler(UnAuthorizedException.class)
	public ErrorResponse unAuthorizedHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 401

	@ResponseStatus(HttpStatus.FORBIDDEN)
	@ExceptionHandler(ForbiddenException.class)
	public ErrorResponse forbiddenHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 403

	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(NotFoundException.class)
	public ErrorResponse notFoundHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 404

	@ResponseStatus(HttpStatus.REQUEST_TIMEOUT)
	@ExceptionHandler(TimeOutException.class)
	public ErrorResponse timeoutHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 408

	@ResponseStatus(HttpStatus.CONFLICT)
	@ExceptionHandler(ConflictException.class)
	public ErrorResponse conflictHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 409

	@ResponseStatus(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
	@ExceptionHandler(UnsupportedMediaTypeException.class)
	public ErrorResponse unsupportedMediaTypeHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 415

	@ResponseStatus(HttpStatus.I_AM_A_TEAPOT)
	@ExceptionHandler(IAmATeapotException.class)
	public ErrorResponse iAmATeapotHandler(TripRuntimeException exception) {
		log.error(exception.getMessageKey(), exception, exception.getParams());
		return new ErrorResponse(exception.getErrorCode());
	} // 418
}
