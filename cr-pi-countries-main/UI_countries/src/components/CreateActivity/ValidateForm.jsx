const validateForm = (formData, errorState, setErrorState) => {
    let isValid = true;

    // Validación del campo 'name'
    if (!formData.name.trim()) {
        setErrorState((prevError) => ({ ...prevError, name: "Name is required" }));
        isValid = false;
    } else {
        setErrorState((prevError) => ({ ...prevError, name: "" }));
    }

    // Validación del campo 'hours'
    const hoursNumber = parseFloat(formData.hours);
    if (isNaN(hoursNumber) || hoursNumber % 1 !== 0) {
        setErrorState((prevError) => ({ ...prevError, hours: "Hours must be a whole number" }));
        isValid = false;
    } else {
        setErrorState((prevError) => ({ ...prevError, hours: "" }));
    }


    return isValid;
};

export default validateForm