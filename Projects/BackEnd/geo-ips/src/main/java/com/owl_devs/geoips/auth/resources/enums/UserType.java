package com.owl_devs.geoips.auth.resources.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum UserType {
    ADMIN,
    PATIENT;

    @JsonCreator
    public static UserType fromValue(String value) {
        return valueOf((value.toUpperCase()));
    }

    @JsonValue
    public String toValue() {
        return this.name();
    }
}
