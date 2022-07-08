const isValideData = (signInData, setEmailError, setPasswordError) => {
    let isValid = true;

    setEmailError(null);
    setPasswordError(null);

    if (signInData.email.length === 0) {
        setEmailError("Esse campo não pode estar vazio!");
        isValid = false;
    }

    if (signInData.password.length === 0) {
        setPasswordError("Esse campo não pode estar vazio!");
        isValid = false;
    }

    return isValid;
}

export default isValideData;