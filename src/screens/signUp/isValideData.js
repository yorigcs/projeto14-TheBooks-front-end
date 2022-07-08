const isValideData = (signUpData, setNameError, setEmailError, setCpfError, setPasswordError) => {
    let isValid = true;

    setNameError(null);
    setEmailError(null);
    setCpfError(null);
    setPasswordError(null);

    if (signUpData.name.length === 0) {
        setNameError("Esse campo não pode estar vazio!");
        isValid = false;
    }
    const RegexEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!RegexEmail.test(signUpData.email)) {
        setEmailError("Digite um e-mail válido.");
        isValid = false;
    }

    if (signUpData.password.length < 3) {
        setPasswordError("A senha deve ser maior que três carácteres!");
        isValid = false;
    }
    const RegexCPF =/^[0-9]*$/;
    if(signUpData.cpf.length !== 11 || !RegexCPF.test(signUpData.cpf)){
        setCpfError("Digite somente números!");
        isValid = false;
    }

    return isValid;
}

export default isValideData;