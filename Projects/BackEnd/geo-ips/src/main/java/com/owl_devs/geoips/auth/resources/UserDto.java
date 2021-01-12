package com.owl_devs.geoips.auth.resources;

import com.owl_devs.geoips.auth.resources.enums.IdType;
import com.owl_devs.geoips.auth.resources.enums.UserType;
import lombok.*;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.Instant;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

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
    //TODO: crear módulo de citas y descomentar la variable de abajo
    // private List<AppointmentDto> appointments;
}
