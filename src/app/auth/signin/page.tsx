import SigninForm from "./_components/SigninForm";

interface SigninProps {
  searchParams: {
    path?: string;
  };
}

function Signin(props: SigninProps) {
  return (
    <div className="p-10">
      <p className="text-center mb-4">Signin</p>
      <SigninForm redirectPath={props.searchParams.path} />
    </div>
  );
}

export default Signin;
