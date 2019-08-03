package org.acme.ecommerce.celular;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * @author leonildo.albani
 * @since 1.0 (31/07/2019)
 */
@Path("/celular")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CelularResource {

    @GET
    public List<Celular> listAll() {
        return Celular.listAll();
    }

    @POST
    @Transactional
    public Response insert(Celular celular) {
        celular.id = null;
        celular.persist();
        return Response.ok(celular).build();
    }
}