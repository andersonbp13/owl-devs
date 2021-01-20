package com.owl_devs.geoips.appointment.controller;

import com.google.common.base.Preconditions;
import com.owl_devs.geoips.appointment.resources.AppointmentDto;
import com.owl_devs.geoips.appointment.resources.NewAppointmentDto;
import com.owl_devs.geoips.appointment.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class AppointmentController {
    AppointmentService appointmentService;

    @Autowired
    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }


    @PostMapping("/store-appointment")
    public ResponseEntity<?> storeAppointment(@RequestBody NewAppointmentDto newAppointmentDto) {
        Preconditions.checkArgument(newAppointmentDto != null, "appointmentDto can not be null");

        appointmentService.createAppointment(newAppointmentDto);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


}