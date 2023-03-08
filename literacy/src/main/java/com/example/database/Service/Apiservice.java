package com.example.database.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.database.repository.Repository;
import com.example.database.Models.literacymodel;

@Service
public class Apiservice {
	
	     @Autowired     
	     private Repository stu;
	     
	     public literacymodel savedetails(literacymodel s)
	     {
	    	 return stu.save(s);
	     }
	     
	     public List<literacymodel> getAllDetails()
	     {
	    	 List<literacymodel> arr = new ArrayList<>();
	    	 arr=stu.findAll();
	    	 return arr;
//	    	 return stu.findAll() ;   
	    	 }
	     public void deleteDepartmentById(int id)
	     {
	    	 stu.deleteById(id);
	     }
	     public literacymodel updateStudent(int id,literacymodel s ) {
	    	 return stu.saveAndFlush(s);
	     }

		public literacymodel getAllDetailsById(int id) {
			return stu.findById(id).get();
		}
}
