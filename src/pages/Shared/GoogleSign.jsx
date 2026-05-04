import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const GoogleSign = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const hndleSigninWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button className="cursor-pointer w-full text-center py-2 border mt-5 " onClick={hndleSigninWithGoogle}>SignIn With Google</button>
    </div>
  );
};

export default GoogleSign;
