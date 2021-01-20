package com.owl_devs.geoips.appointment.resources;

import lombok.*;

import java.time.Instant;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDto {
    private Integer id;
    // TODO: como poner el ipsDto
    private Instant dayAndHour;

}
