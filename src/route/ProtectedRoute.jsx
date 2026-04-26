"use client";

import { useRouter } from "next/navigation";
import Loading from "../components/shared/Loading";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in");
    }
  }, [user, loading, router]);

  if (loading) return <Loading />;

  if (!user) return <Loading />;

  return children;
};

export default ProtectedRoute;
