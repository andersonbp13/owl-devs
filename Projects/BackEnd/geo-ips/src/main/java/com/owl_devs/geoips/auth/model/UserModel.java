package com.owl_devs.geoips.auth.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.owl_devs.geoips.auth.resources.enums.IdType;
import com.owl_devs.geoips.auth.resources.enums.UserType;
import lombok.*;

import javax.persistence.*;
import java.time.Instant;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer personalId;
    @Enumerated(EnumType.STRING)
    private IdType idType;
    private String userName;
    private String password;
    @Enumerated(EnumType.STRING)
    private UserType userType;
    private String name;
    private Instant birthDate;
    private Long cellphone;
}
