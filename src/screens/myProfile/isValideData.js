const isValideData = (passwordData, setOldPasswordError, setNewPasswordError) => {
    let isValid = true;

    setOldPasswordError(null);
    setNewPasswordError(null);

    if (passwordData.newPassword.length < 3) {
        setNewPasswordError("A nova senha deve ser maior que três carácteres!");
        isValid = false;
    }

    if (passwordData.oldPassword.length < 3) {
        setOldPasswordError("Este campo não pode estar vazio!");
        isValid = false;
    }
   
    return isValid;
}

export default isValideData;