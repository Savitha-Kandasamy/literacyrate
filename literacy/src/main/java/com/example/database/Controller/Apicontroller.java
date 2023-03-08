package com.example.database.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.database.Models.literacymodel;
import com.example.database.Service.Apiservice;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Apicontroller {
	
		@Autowired
		private Apiservice stuservice; 
		
		@GetMapping("/get")
		public List<literacymodel> getDetails(){
			return stuservice.getAllDetails();
		} 
		
		@GetMapping("/get/{id}")
		public literacymodel getDetailsById(@PathVariable("id") int id){
			return stuservice.getAllDetailsById(id);
		} 
		
		@PostMapping ("/add")
		public literacymodel postDetails(@RequestBody literacymodel s) {
			return stuservice.savedetails(s);
		} 
		
		@DeleteMapping("/delete/{id}")
		public void delete(@PathVariable int id) {
			stuservice.deleteDepartmentById(id);
		}
		
		@PutMapping("/update/{id}")
		public literacymodel update(@PathVariable int id,@RequestBody literacymodel s) {
			return stuservice.updateStudent(id,s);
		}
}
