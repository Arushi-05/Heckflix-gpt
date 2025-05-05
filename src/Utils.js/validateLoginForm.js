export const validateData = (email, password, name) => {
  const isEmailvalid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailvalid) return "Please enter a valid email address.";
  if (!isPasswordValid) return "Please enter a valid password.";
  //if (!isNameValid) return "Please enter a valid name.";
  return null;
};
