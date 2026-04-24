import Link from "next/link";
import CustomBtn from "../shared/CustomBtn";
import OrDivider from "../signin/OrDivider";
import { Field, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

const SignupForm = ({ onSubmit }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={onSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
            <Input
              id="fieldgroup-name"
              name="name"
              type="text"
              placeholder="Full name"
              className="py-3 px-5 h-auto"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email*</FieldLabel>
            <Input
              id="fieldgroup-email"
              name="email"
              type="email"
              placeholder="Email address"
              className="py-3 px-5 h-auto"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password*</FieldLabel>
            <Input
              id="fieldgroup-password"
              name="password"
              type="password"
              placeholder="Password"
              className="py-3 px-5 h-auto"
              required
            />
          </Field>
          <Field orientation="vertical">
            <CustomBtn
              text="Create Account"
              type="submit"
              variant="secondary"
            />
            <OrDivider />
            <Link href="/sign-in" className="">
              <CustomBtn
                text="Sign In Now"
                variant="secondary"
                className="w-full"
              />
            </Link>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
};

export default SignupForm;
