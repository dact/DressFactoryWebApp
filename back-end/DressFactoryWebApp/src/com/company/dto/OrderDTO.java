package com.company.dto;

import java.sql.Date;
import java.util.List;

import com.company.model.Client;
import com.company.model.Product;

public class OrderDTO {
	
	private Client client; 
	private List<Product> productsList; 
	private Date deliveryDate;

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public List<Product> getProductsList() {
		return productsList;
	}

	public void setProductsList(List<Product> productsList) {
		this.productsList = productsList;
	}

	public Date getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public OrderDTO(Client client, List<Product> productsList, Date deliveryDate) {
		this.client = client;
		this.productsList = productsList;
		this.deliveryDate = deliveryDate;
	}

}
