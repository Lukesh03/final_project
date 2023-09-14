package com.cdac.org.housingsocietymanagement;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cdac.org.housingsocietymanagement.model.User;
import com.cdac.org.housingsocietymanagement.repository.UserRepository;

@SpringBootTest
class HousingsocietymanagementApplicationTests {

	@Autowired
	private UserRepository userRepository;
	
	@Test
	void contextLoads() {
		 User user = userRepository.findById(6);
		 System.out.println(user);
	        userRepository.delete(user);
	}

}
