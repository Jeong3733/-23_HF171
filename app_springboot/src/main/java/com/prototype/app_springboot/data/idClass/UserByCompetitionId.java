package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@EqualsAndHashCode
@NoArgsConstructor
public class UserByCompetitionId implements Serializable {
    private String userInfo;
    private int teamInfo;
    private int competitionInfo;
}
