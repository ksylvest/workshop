import type { FC } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { Layout } from "./layout";

import { Home } from "./home";
import { Login } from "./login";
import { Signup } from "./signup";

import { AdminLayout } from "./admin/layout";
import { AdminAppointments } from "./admin/appointments";
import { AdminCoursesList } from "./admin/courses/list";
import { AdminCoursesNew } from "./admin/courses/new";
import { AdminFacultiesList } from "./admin/faculties/list";
import { AdminFacultiesNew } from "./admin/faculties/new";
import { AdminUsersList } from "./admin/users/list";
import { AdminUsersNew } from "./admin/users/new";

import { client } from "@/application/config/apollo";
import { Authentication } from "@/application/graphql/app_schema";
import { World } from "@/application/contexts/world";

declare const AUTHENTICATION: Pick<Authentication, "id"> | undefined;

export const App: FC = () => {
  const [authentication, auth] = useState(AUTHENTICATION);
  const deauth = () => auth(undefined);

  return (
    <World.Provider value={{ auth, deauth, authentication }}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="admin" element={<AdminLayout />}>
                <Route path="appointments" element={<AdminAppointments />} />
                <Route path="courses" element={<AdminCoursesList />} />
                <Route path="courses/new" element={<AdminCoursesNew />} />
                <Route path="faculties" element={<AdminFacultiesList />} />
                <Route path="faculties/new" element={<AdminFacultiesNew />} />
                <Route path="users" element={<AdminUsersList />} />
                <Route path="users/new" element={<AdminUsersNew />} />
              </Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    </World.Provider>
  );
};
