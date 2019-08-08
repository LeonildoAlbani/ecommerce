package org.acme.ecommerce.celular;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

import org.acme.ecommerce.commons.ResponseEntity;

/**
 * Classe para intermédio entre resource e DAO.
 * Útil para regras de negócios.
 *
 * @author leonildo.albani
 * @since 1.0 (07/08/2019)
 */
@ApplicationScoped
public class CelularService {

    @Inject
    CelularRepository celularRepository;

    public List<Celular> buscaComElasticSearch(String busca) {

        return celularRepository.buscaComElasticSearch(busca);
    }

    public List<Celular> buscaSemElasticSearch(String busca) {

        return celularRepository.buscaSemElasticSearch(busca);
    }

    public Celular insert(Celular celular) {

        celular.id = null; //Força ser sempre update
        return celularRepository.insert(celular);
    }

    public ResponseEntity<Celular> findAll() {
        return new ResponseEntity(celularRepository.findAll(), 1);
    }

    public List<Celular> listAll() {
        return celularRepository.listAll();
    };
}