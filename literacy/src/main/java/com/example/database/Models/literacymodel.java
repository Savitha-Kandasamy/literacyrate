package com.example.database.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Table;
@Entity
@Table(name="Literacy_Rate")
public class literacymodel {
	@jakarta.persistence.Id
	@Column(name="ID")
	private int Id;
	@Column(name="STATE")
	private String state;
	@Column(name="DISTRICT")
	private String district;
	@Column (name="YEAR")
	private int year;
	@Column (name="TOTALRATE")
	private String totalrate;
	
	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getTotalrate() {
		return totalrate;
	}

	public void setTotalrate(String totalrate) {
		this.totalrate = totalrate;
	}

	
	public literacymodel(int id, String state, String district, int year, String totalrate) {
		super();
		Id = id;
		this.state = state;
		this.district = district;
		this.year = year;
		this.totalrate = totalrate;
	}

	public literacymodel() {
		
	}
}


