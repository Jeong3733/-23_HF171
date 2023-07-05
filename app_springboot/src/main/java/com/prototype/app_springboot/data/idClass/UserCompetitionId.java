package com.prototype.app_springboot.data.idClass;

import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@EqualsAndHashCode
@NoArgsConstructor
public class UserCompetitionId implements Serializable {
    private int userInfo;
    private int competitionInfo;
}
