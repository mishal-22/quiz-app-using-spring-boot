package com.mishal.QuizApp.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Data
public class Response {
  Integer id;
  String response;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getResponse() {
	return response;
}
public void setResponse(String response) {
	this.response = response;
}

}
