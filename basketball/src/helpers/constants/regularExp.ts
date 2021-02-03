export const regExpImageTeam = /^(http:\/\/)dev\.trainee/;

export const regExpName = /^([A-ZА-Я]{3,13})\s?([A-ZА-Я]{3,13})$/i;

export const regExpCommandName = /^([^\W\d_]{3,})([^\W\d_] | \s)?([^\W\d_]{3,})?([^\W\d_] | \s)?([^\W\d_]{3,})$/i;

export const regExpDivision = /^([^\W\d]{3,})([^\W\d] | \s)?([^\W\d]{3,})?([^\W\d] | \s)?([^\W\d]{3,})$/;

export const regExpLogin = /^([^\W\s]{3,13})$/;

export const regExpPassword = /^([^\s]+)$/i;

export const regExpYear = /^([^\D_]{4})$/i;
