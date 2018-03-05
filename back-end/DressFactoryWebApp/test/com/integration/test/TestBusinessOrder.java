package com.integration.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.company.business.OrderBusiness;
import com.company.business.impl.OrderBusinessImpl;
import com.company.model.Client;
import com.company.model.Order;
import com.company.model.Product;
import com.company.dto.OrderDTO;

public class TestBusinessOrder {
	
	private static final int MAX_QUANTITY_PRODUCTS = 5;
	
	@Test
	public void testOrderHasMaxQuantityOfProducts(){
		//Arrange
		Client client = new Client(1,"Jose Ramirez","1020304050","CC","Cra 80# 47A - 53");
		int categoryId = 1,companyId=1;
		
		//Act
		OrderBusiness orderBusiness = new OrderBusinessImpl();
		List<Product> productsList = new ArrayList<Product>();
		
		productsList.add(new Product(1, "Camisa", 500, companyId, categoryId));
		productsList.add(new Product(1, "Pantalon", 500, companyId, categoryId));
		productsList.add(new Product(1, "Chaqueta", 500, companyId, categoryId));
		productsList.add(new Product(1, "Pantalon1", 500, companyId, categoryId));
		productsList.add(new Product(1, "Chaqueta2", 500, companyId, categoryId));
		
		//Order order = orderBusiness.createOrder(client,productsList);
		
		Date deliveryDate = new Date(2018,6,3);
		
		OrderDTO orderDTO = new OrderDTO(client,productsList,deliveryDate);
		
		Order order = orderBusiness.createOrder(orderDTO);
		
		//Assert
		assertNotNull(order);
		assertEquals(order.getProducts().size(),MAX_QUANTITY_PRODUCTS);
	}

}
