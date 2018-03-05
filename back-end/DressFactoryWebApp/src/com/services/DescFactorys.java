package com.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/desc")
public class DescFactorys {

	@GET
	public Response getAll() {
		return Response.ok("listo").build();
	}
	
}
