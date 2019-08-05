package org.acme.ecommerce.compra;

import java.time.LocalDateTime;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.acme.ecommerce.celular.Celular;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

/**
 * Classe que representa uma compra feita pelo usuário.
 *
 * @author leonildo.albani
 * @since 1.0 (05/08/2019)
 */
@Entity
public class Compra extends PanacheEntity {

    public String nomeCliente; //Para simplificar, vou deixar apenas com o nome.

    public LocalDateTime dataHoraCompra;

    @ManyToMany
    @JoinTable(name = "Compra_Produto",
        joinColumns = {@JoinColumn(name = "id_compra")},
        inverseJoinColumns = {@JoinColumn(name = "id_celular")}
    )
    public Set<Celular> celulares;

    public Compra() {

    }
}
