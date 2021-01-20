package com.owl_devs.geoips.appointment.services;

import com.google.common.base.Preconditions;
import com.owl_devs.geoips.appointment.resources.NewAppointmentDto;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {
    public void createAppointment(NewAppointmentDto newAppointmentDto) {
        Preconditions.checkArgument(newAppointmentDto.getUserId() != null, "UserId can not be null");
        Preconditions.checkArgument(newAppointmentDto.getLat() != null, "Lat can not be null");
        Preconditions.checkArgument(newAppointmentDto.getLon() != null, "Lon can not be null");

    }




}
