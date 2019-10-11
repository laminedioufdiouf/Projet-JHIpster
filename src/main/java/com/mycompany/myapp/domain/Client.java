package com.mycompany.myapp.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;

/**
 * A Client.
 */
@Entity
@Table(name = "client")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Client implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "numeropiece", nullable = false, unique = true)
    private Integer numeropiece;

    @NotNull
    @Column(name = "nomcomplet", nullable = false)
    private String nomcomplet;

    @NotNull
    @Column(name = "telephone", nullable = false, unique = true)
    private Integer telephone;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNumeropiece() {
        return numeropiece;
    }

    public Client numeropiece(Integer numeropiece) {
        this.numeropiece = numeropiece;
        return this;
    }

    public void setNumeropiece(Integer numeropiece) {
        this.numeropiece = numeropiece;
    }

    public String getNomcomplet() {
        return nomcomplet;
    }

    public Client nomcomplet(String nomcomplet) {
        this.nomcomplet = nomcomplet;
        return this;
    }

    public void setNomcomplet(String nomcomplet) {
        this.nomcomplet = nomcomplet;
    }

    public Integer getTelephone() {
        return telephone;
    }

    public Client telephone(Integer telephone) {
        this.telephone = telephone;
        return this;
    }

    public void setTelephone(Integer telephone) {
        this.telephone = telephone;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Client)) {
            return false;
        }
        return id != null && id.equals(((Client) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Client{" +
            "id=" + getId() +
            ", numeropiece=" + getNumeropiece() +
            ", nomcomplet='" + getNomcomplet() + "'" +
            ", telephone=" + getTelephone() +
            "}";
    }
}
