const getMessageByError = errorObejct => {
  const {code, message} = errorObejct;
  switch (code) {
    case 'auth/invalid-email':
      return 'email inválido!';
    case 'auth/user-not-found':
      return 'usuário não existe!';
    case 'auth/wrong-password':
      return 'senha inválida!';
    case 'auth/network-request-failed':
      return 'sem conexão com a internet';
    case 'auth/weak-password':
      return 'senha deve ter 6 caracteres';
    case 'auth/operation-not-allowed':
      return 'operação não permitida, tente outra novamente!';
    default:
      return message;
  }
};
export {getMessageByError};
