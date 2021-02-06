export const regExpImageTeam = /^(http:\/\/)dev\.trainee/;

export const regExpName = /^([A-ZА-Я]{2,13})\s?([A-ZА-Я]{1,13})?[A-ZА-Я]$/i;

export const regExpCommandName = /^([A-ZА-Я]{2,15})\s?([\sA-ZА-Я]{2,15})[A-ZА-Я]$/i;

export const regExpDivision = /^([A-ZА-Я\d]{2,15})\s?([\s\dA-ZА-Я]{2,15})[A-ZА-Я]$/i;

export const regExpConference = /^[A-ZА-Я\d]{3,18}$/i;

export const regExpLogin = /^([^\W\s]{3,13})$/;

export const regExpPassword = /^([^\s]+)$/i;

export const regExpYear = /^([^\D_]{4})$/i;

export const regExpBirthDay = /^\d{2}\.\d{2}\.\d{4}$/;
