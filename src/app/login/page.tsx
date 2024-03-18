"use client";

import FormAdmin from "@/components/ui/form-admin";
import FormEmployee from "@/components/ui/form-employee";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function LoginPage() {
  return (
    <main className="mt-10 flex w-full justify-center">
      <Tabs defaultValue="karyawan" className="mx-5 w-full">
        <TabsList className="w-full">
          <TabsTrigger value="karyawan" className="w-1/2">
            Karyawan
          </TabsTrigger>
          <TabsTrigger value="admin" className="w-1/2">
            Admin
          </TabsTrigger>
        </TabsList>
        <TabsContent value="karyawan">
          <FormEmployee />
        </TabsContent>
        <TabsContent value="admin">
          <FormAdmin />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default LoginPage;
