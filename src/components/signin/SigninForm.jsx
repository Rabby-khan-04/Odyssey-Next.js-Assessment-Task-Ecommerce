import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "../ui/input";
import CustomBtn from "../shared/CustomBtn";
import OrDivider from "./OrDivider";
import Link from "next/link";

const SigninForm = ({ onSubmit, loading }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={onSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              name="email"
              type="email"
              placeholder="Email address"
              className="py-3 px-5 h-auto"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input
              id="fieldgroup-password"
              name="password"
              type="password"
              placeholder="Password"
              className="py-3 px-5 h-auto"
            />
          </Field>
          <Field orientation="vertical">
            <CustomBtn text="Sign In Now" type="submit" variant="secondary" />
            <OrDivider />
            <Link href="/sign-up" className="">
              <CustomBtn
                text="Create Account"
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

export default SigninForm;
