package com.unit.test;

import org.junit.Test;

import com.company.model.Company;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

public class TestClient {
	
	@PersistenceContext(unitName="TEST_DB")
	private EntityManager em;
	
	@Test
	public void testClientNotNull(){
		//Arrange
		//Properties properties = new Properties();
		//properties.setProperty(PersistenceUnitProperties.ECLIPSELINK_PERSISTENCE_XML,"META-INF/test-persistence.xml");
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("TEST_DB");
		em = emf.createEntityManager();
		Query q = em.createNamedQuery("Company.findAll",Company.class);

		//Act
		System.out.println(q.getResultList());
		//Assert
		
	}

}
