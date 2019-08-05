package org.acme.ecommerce.compra;

import java.time.LocalDateTime;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * @author leonildo.albani
 * @since 1.0 (31/07/2019)
 */
@Path("/compra")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CompraResource {

    @POST
    @Transactional
    public Response insert(Compra compra) {

        compra.id = null;
        compra.dataHoraCompra = LocalDateTime.now();
        compra.persist();
        return Response.ok(compra).status(201).build();
    }
}