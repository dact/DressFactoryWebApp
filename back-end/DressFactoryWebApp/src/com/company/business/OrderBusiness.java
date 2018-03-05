package com.company.business;

import java.util.List;

import com.company.dto.OrderDTO;
import com.company.model.Client;
import com.company.model.Order;
import com.company.model.Product;

public interface OrderBusiness {

	public Order createOrder(Client client,List<Product> listProducts);

	public Order createOrder(OrderDTO orderDTO);
}
