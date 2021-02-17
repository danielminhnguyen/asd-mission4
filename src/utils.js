const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

export const checkRego = (value) => {
  if (specialChar.test(value) || value.toString().length > 6 || value === "") {
    return false;
  } else {
    return true;
  }
};

export const checkLicence = (value) => {
  if (specialChar.test(value) || value.toString().length !== 8) {
    return false;
  } else {
    return true;
  }
};
