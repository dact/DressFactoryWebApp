package com.company.business.impl;

import java.util.ArrayList;
import java.util.List;

import com.company.business.OrderBusiness;
import com.company.dto.OrderDTO;
import com.company.model.Client;
import com.company.model.Order;
import com.company.model.OrderDtl;
import com.company.model.Product;

public class OrderBusinessImpl implements OrderBusiness{

	public Order createOrder(OrderDTO orderDTO) {
		//validate the last orders is pending for pay
		
		if(orderDTO.getProductsList().isEmpty() || orderDTO.getClient()==null) return null;
		
		Order order = new Order();
		order.setClient(orderDTO.getClient());
		order.setDeliveryDate(orderDTO.getDeliveryDate());
		order.setProductsList(orderDTO.getProductsList());
		

		int totalPrice = 0;
		for(Product product:orderDTO.getProductsList()){
			totalPrice += product.getPrice();
			//listOrderDtl.add(new OrderDtl(order,product));
		}
		
		order.setTotalPrice(totalPrice);
		/*
		OrderDtl orderDtl = new OrderDtl();
		orderDtl.setProductId(product);
		orderDtl.setCompanyId(companyId);
		orderDtl.setOrderId(orderId);
		*/
		return order;
	}

}
