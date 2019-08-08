package org.acme.ecommerce.celular;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

import org.acme.ecommerce.commons.ResponseEntity;
import org.hibernate.search.mapper.orm.Search;

import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.panache.common.Page;
import io.quarkus.runtime.StartupEvent;

/**
 * @author leonildo.albani
 * @since 1.0 (31/07/2019)
 */
@Path("/celular")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CelularResource {

    @Inject
    CelularService celularService;

    @GET
    @Path("/busca")
    public List<Celular> busca(@QueryParam("busca") String busca) {
        return celularService.buscaComElasticSearch(busca);
    }

    @GET
    @Path("/busca-sem-elasticsearch")
    public List<Celular> buscaSemElasticsearch(@QueryParam("busca") String busca) {

        return celularService.buscaSemElasticSearch(busca);
    }

    @GET
    public List<Celular> listAll() {
        return celularService.listAll();
    }
//    @GET
//    public ResponseEntity<Celular> listAll() {
//        return celularService.findAll();
//    }

    @POST
    @Transactional
    public Response insert(Celular celular) {
        Celular celularPersistido = celularService.insert(celular);
        return Response.ok(celularPersistido).build();
    }
}