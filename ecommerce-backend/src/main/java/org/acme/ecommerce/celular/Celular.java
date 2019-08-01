package org.acme.ecommerce.celular;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

import javax.persistence.Entity;
import java.math.BigDecimal;

/**
 * Representa os objetos que podem ser comprados.
 *
 * Caso tivesse mais tempo e fosse algo mais definitivo, nunca criaria uma classe específica assim.
 * Provavelmente criaria uma classe "Produto" ou algo do gênero para representar o que está sendo comprado.
 *
 * @author leonildo.albani
 * @since 1.0 (31/07/2019)
 */
@Entity
public class Celular extends PanacheEntity {

    public Celular(){}

    public String modelo;
    public BigDecimal preco;
}