package com.owl_devs.geoips.appointment.resources;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NewAppointmentDto {
    private Integer userId;
    private Long lat;
    private Long lon;
}
